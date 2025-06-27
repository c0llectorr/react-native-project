import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "@context/ThemeContext";

export const OuterLayout = () => {
	const { theme } = useTheme();
	const bg = theme === "light" ? "#F0F0F0" : "#121212";

	return (
		<SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
			<Slot />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
});