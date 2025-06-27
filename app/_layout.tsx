import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Slot, useRouter, useRootNavigationState } from "expo-router";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

function RootApp() {
	const { user } = useAuth();
	const router = useRouter();
	const rootNavigationState = useRootNavigationState();

	useEffect(() => {
		if (!rootNavigationState?.key) return; // wait for router ready

		if (user === null) {
			router.replace("/login");
		}
	}, [rootNavigationState?.key, user]);

	if (!rootNavigationState?.key || user === undefined) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" color="#F5C518" />
			</View>
		);
	}

	return <Slot />;
}

export default function Layout() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<RootApp />
			</ThemeProvider>
		</AuthProvider>
	);
}