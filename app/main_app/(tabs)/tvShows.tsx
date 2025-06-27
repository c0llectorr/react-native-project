import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { MediaCard } from "@components/MediaCard";
import { useTheme } from "@context/ThemeContext";

const tvList = [
	{
		id: "1",
		title: "Game of Thrones",
		poster: "https://via.placeholder.com/120x180",
	},
	{
		id: "2",
		title: "The Office",
		poster: "https://via.placeholder.com/120x180",
	},
];

export default function TvShows() {
	const router = useRouter();
	const { theme } = useTheme();
	const bg = theme === "light" ? "#F0F0F0" : "#121212";

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<Text style={styles.header}>TV Shows</Text>
			<FlatList
				data={tvList}
				numColumns={2}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<MediaCard
						title={item.title}
						poster={item.poster}
						onPress={() =>
							router.push(
								`/main_app/mediaScreens/mediaDetail?id=${item.id}&title=${item.title}`
							)
						}
					/>
				)}
				showsVerticalScrollIndicator={false}
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