import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { MediaCard } from "@/components/MediaCard";
import { useTheme } from "@/context/ThemeContext";

const featured = [
	{
		id: "1",
		title: "Breaking Bad",
		poster: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
	},
	{
		id: "2",
		title: "Stranger Things",
		poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtyAXKGtMyecRWN0WVVWZdzfSx0p_6Q9ETw&s",
	},
];

export default function Home() {
	const router = useRouter();
	const { theme } = useTheme();
	const bg = theme === "light" ? "#F0F0F0" : "#121212";

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={[styles.container, { backgroundColor: bg }]}>
				<Text style={styles.header}>Welcome to NMDB</Text>
				<Text style={styles.section}>Featured</Text>
				<FlatList
					data={featured}
					horizontal
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
					showsHorizontalScrollIndicator={false}
					style={{ marginBottom: 20, marginTop: 5 }}
				/>

				<Text style={styles.section}>MOVIES</Text>
				<FlatList
					data={featured}
					horizontal
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
					showsHorizontalScrollIndicator={false}
					style={{ marginBottom: 20, marginTop: 5 }}
				/>

				<Text style={styles.section}>TV SHOWS</Text>
				<FlatList
					data={featured}
					horizontal
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
					showsHorizontalScrollIndicator={false}
					style={{ marginBottom: 20, marginTop: 5 }}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { paddingTop: 40, paddingHorizontal: 15 },
	header: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#F5C518",
		marginBottom: 20,
	},
	section: { fontSize: 18, color: "#FFFFFF", marginBottom: 10 },
	mediaCard: {
		marginRight: 10,
		backgroundColor: "#1E1E1E",
		borderRadius: 10,
		padding: 10,
		width: 120,
		alignItems: "center",
	},
});