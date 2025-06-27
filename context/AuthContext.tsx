import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

interface User {
	username: string;
}

interface AuthContextProps {
	user: User | null | undefined;
	login: (username: string, password: string) => Promise<boolean>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
	user: undefined,
	login: async () => false,
	logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null | undefined>(undefined);

	useEffect(() => {
		const loadUser = async () => {
			try {
				let stored: string | null = null;

				if (Platform.OS === "web") {
					stored = localStorage.getItem("user");
				} else {
					stored = await SecureStore.getItemAsync("user");
				}

				if (stored) {
					const parsed = JSON.parse(stored);
					setUser(parsed);
				} else {
					setUser(null);
				}
			} catch (error) {
				console.error("Failed to load user", error);
				setUser(null);
			}
		};

		loadUser();
	}, []);

	const login = async (username: string, password: string) => {
		if (username === "admin" && password === "admin123") {
			const userObj = { username };
			setUser(userObj);

			const value = JSON.stringify(userObj);
			if (Platform.OS === "web") {
				localStorage.setItem("user", value);
			} else {
				await SecureStore.setItemAsync("user", value);
			}

			return true;
		}
		return false;
	};

	const logout = async () => {
		setUser(null);
		if (Platform.OS === "web") {
			localStorage.removeItem("user");
		} else {
			await SecureStore.deleteItemAsync("user");
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);