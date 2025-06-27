import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	Dimensions,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTheme } from "@context/ThemeContext";

export default function MediaDetail() {
	const { id, title } = useLocalSearchParams<{ id: string; title: string }>();
	const { theme } = useTheme();
	const c = theme === "light" ? "#111" : "#fff";
	// TODO: replace with real poster URL from API
	const posterUrl = `https://via.placeholder.com/300x450?text=${encodeURIComponent(
		title
	)}`;

	return (
		<ScrollView
			contentContainerStyle={[
				styles.container,
				{ backgroundColor: theme === "light" ? "#fff" : "#121212" },
			]}
		>
			<Image source={{ uri: posterUrl }} style={styles.poster} />
			<Text style={[styles.title, { color: c }]}>{title}</Text>
			<Text style={[styles.subtitle, { color: c }]}>ID: {id}</Text>
			<Text style={[styles.heading, { color: c }]}>Overview</Text>
			<Text style={[styles.overview, { color: c }]}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Maecenas ac mi vel est luctus posuere.
			</Text>
			<Text style={[styles.heading, { color: c }]}>Rating</Text>
			<Text style={[styles.overview, { color: c }]}>⭐ 8.5 / 10</Text>
		</ScrollView>
	);
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: { alignItems: "center", padding: 20 },
	poster: {
		width: width * 0.7,
		height: width * 1.05,
		borderRadius: 12,
		marginBottom: 20,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 8,
	},
	subtitle: { fontSize: 16, marginBottom: 16 },
	heading: {
		fontSize: 20,
		fontWeight: "600",
		alignSelf: "flex-start",
		marginTop: 16,
	},
	overview: {
		fontSize: 16,
		lineHeight: 22,
		textAlign: "justify",
		marginTop: 8,
	},
});