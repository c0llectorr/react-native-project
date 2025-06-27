import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@context/ThemeContext";

interface ReviewItemProps {
	title: string;
	review: string;
	date: string;
}

export const ReviewItem = ({ title, review, date }: ReviewItemProps) => {
	const { theme } = useTheme();
	const cardBg = theme === "light" ? "#FFFFFF" : "#1E1E1E";
	const textColor = theme === "light" ? "#111111" : "#FFFFFF";

	return (
		<View style={[styles.container, { backgroundColor: cardBg }]}>
			<Text style={[styles.title, { color: textColor }]}>{title}</Text>
			<Text style={[styles.review, { color: textColor }]}>{review}</Text>
			<Text style={[styles.date, { color: textColor }]}>{date}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { padding: 10, borderRadius: 8, marginVertical: 5 },
	title: { fontWeight: "bold", fontSize: 16 },
	review: { marginTop: 5, fontSize: 14 },
	date: { marginTop: 5, fontSize: 12, color: "#888888" },
});