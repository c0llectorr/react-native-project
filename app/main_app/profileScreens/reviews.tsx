import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ReviewItem } from "@/components/ReviewItem";
import { useTheme } from "@/context/ThemeContext";

const dummyReviews = [
	{
		id: "1",
		title: "Breaking Bad",
		review: "Amazing show!",
		date: "2025-06-20",
	},
];

export default function Reviews() {
	const { theme } = useTheme();
	const bg = theme === "light" ? "#FFFFFF" : "#121212";

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<Text style={styles.header}>Your Reviews</Text>
			<FlatList
				data={dummyReviews}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ReviewItem
						title={item.title}
						review={item.review}
						date={item.date}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 10 },
	header: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#F5C518",
		marginBottom: 10,
	},
});