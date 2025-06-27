import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button";

export default function Profile() {
	const { user, logout } = useAuth();
	const router = useRouter();
	const { theme } = useTheme();
	const bg = theme === "light" ? "#F0F0F0" : "#121212";

	const handleLogout = async () => {
		await logout();
		router.replace("/(auth)/login");
	};

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<Text style={styles.header}>Profile</Text>
			<Text style={styles.text}>Welcome, {user?.username}</Text>
			<Link href="/main_app/profileScreens/watchlist" asChild>
				<Text style={styles.link}>Your Watchlist</Text>
			</Link>
			<Link href="/main_app/profileScreens/reviews" asChild>
				<Text style={styles.link}>Your Reviews</Text>
			</Link>
			<Link href="/main_app/profileScreens/contactUs" asChild>
				<Text style={styles.link}>Contact Us</Text>
			</Link>
			<Button title="Logout" onPress={handleLogout} color="#E50914" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center" },
	header: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#F5C518",
		marginBottom: 10,
	},
	text: { fontSize: 18, color: "#FFFFFF", marginBottom: 20 },
	link: { fontSize: 16, color: "#1E90FF", marginVertical: 5 },
});