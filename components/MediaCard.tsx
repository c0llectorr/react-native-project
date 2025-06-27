import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@context/ThemeContext";

interface MediaCardProps {
	title: string;
	poster: string;
	onPress: () => void;
}

export const MediaCard = ({ title, poster, onPress }: MediaCardProps) => {
	const { theme } = useTheme();
	const textColor = theme === "light" ? "#111111" : "#FFFFFF";

	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Image source={{ uri: poster }} style={styles.image} />
			<Text
				style={[styles.title, { color: textColor }]}
				numberOfLines={1}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: { margin: 5, width: 120 },
	image: { width: "100%", height: 180, borderRadius: 8 },
	title: { marginTop: 5, fontSize: 14, textAlign: "center" },
});