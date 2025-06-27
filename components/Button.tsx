import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "@context/ThemeContext";

interface ButtonProps {
	title: string;
	onPress: () => void;
	color?: string;
}

export const Button = ({ title, onPress, color }: ButtonProps) => {
	const { theme } = useTheme();
	const bgColor = color || (theme === "light" ? "#F5C518" : "#F5C518");

	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: bgColor }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		alignItems: "center",
		marginVertical: 5,
	},
	text: {
		color: "#000",
		fontWeight: "bold",
		fontSize: 16,
	},
});