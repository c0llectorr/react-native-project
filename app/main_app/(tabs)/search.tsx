import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MediaCard } from "@/components/MediaCard";
import { SearchBar } from "@/components/SearchBar";
import { useMedia } from "@/context/MediaContext";
import { useTheme } from "@/context/ThemeContext";

export default function Search() {
	const { movies, tvShows } = useMedia();
	const [query, setQuery] = useState("");
	const router = useRouter();
	const { theme } = useTheme();
	const bg = theme === "light" ? "#F0F0F0" : "#121212";

	const data = [...movies, ...tvShows].filter((item) =>
		item.title.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<SearchBar value={query} onChangeText={setQuery} />
			<FlatList
				data={data}
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
			/>
		</View>
	);
}

const styles = StyleSheet.create({ container: { flex: 1 } });