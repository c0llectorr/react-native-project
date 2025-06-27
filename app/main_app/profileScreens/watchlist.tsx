import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ReviewItem } from "@/components/ReviewItem";
import { useTheme } from "@/context/ThemeContext";

const dummyWatchlist = [{ id: "1", title: "Inception", review: "", date: "" }];

export default function Watchlist() {
	const { theme } = useTheme();
	const bg = theme === "light" ? "#FFFFFF" : "#121212";

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<Text style={styles.header}>Your Watchlist</Text>
			<FlatList
				data={dummyWatchlist}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Text
						style={[
							styles.item,
							{
								color:
									theme === "light" ? "#111111" : "#FFFFFF",
							},
						]}
					>
						{item.title}
					</Text>
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
	item: { fontSize: 18, marginVertical: 5 },
});