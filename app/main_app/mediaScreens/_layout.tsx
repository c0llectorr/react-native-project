import React from "react";
import { Stack } from "expo-router";

export default function MediaScreensLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				//headerStyle: { backgroundColor: "#1E1E1E" },
				//headerTintColor: "#F5C518",
				//headerTitleStyle: { fontWeight: "bold" },
			}}
		/>
	);
}