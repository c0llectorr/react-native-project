import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "@context/ThemeContext";

interface SearchBarProps {
	value: string;
	onChangeText: (text: string) => void;
}

export const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
	const { theme } = useTheme();
	const bg = theme === "light" ? "#FFFFFF" : "#1E1E1E";
	const placeholderColor = theme === "light" ? "#CCCCCC" : "#444444";

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<TextInput
				style={styles.input}
				placeholder="Search..."
				placeholderTextColor={placeholderColor}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 8,
		margin: 10,
		borderRadius: 8,
	},
	input: { flex: 1, fontSize: 16 },
});