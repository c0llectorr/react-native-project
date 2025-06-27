import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Button } from "@/components/Button";
import { useTheme } from "@/context/ThemeContext";

export default function ContactUs() {
	const { theme } = useTheme();
	const bg = theme === "light" ? "#FFFFFF" : "#121212";
	const [message, setMessage] = useState("");

	const handleSend = () => {
		if (!message.trim()) {
			return Alert.alert("Validation", "Enter a message");
		}

		Alert.alert("Message Sent", "Thank you for contacting us.");
		setMessage("");
	};

	return (
		<View style={[styles.container, { backgroundColor: bg }]}>
			<Text style={styles.header}>Contact Us</Text>
			<TextInput
				style={[
					styles.textArea,
					{ backgroundColor: theme === "light" ? "#fff" : "#1E1E1E" },
				]}
				placeholder="Your message"
				placeholderTextColor={theme === "light" ? "#888" : "#666"}
				multiline
				value={message}
				onChangeText={setMessage}
			/>
			<Button title="Send" onPress={handleSend} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#F5C518",
		marginBottom: 10,
	},
	textArea: {
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 8,
		padding: 12,
		fontSize: 15,
		marginBottom: 16,
		textAlignVertical: "top",
		height: 120,
	},
});