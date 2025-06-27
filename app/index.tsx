import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@context/AuthContext";
import { View, ActivityIndicator } from "react-native";

export default function RootRedirect() {
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		// wait until we know whether user is loaded
		if (user === undefined) return;

		if (user) {
			// already logged in → send to main_app
			router.replace("/main_app");
		} else {
			router.replace("/(auth)/login");
		}
	}, [user]);

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<ActivityIndicator size="large" color="#F5C518" />
		</View>
	);
}