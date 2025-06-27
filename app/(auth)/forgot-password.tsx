import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";
import { Button } from "@components/Button";
import { isEmailValid } from "@utils/validators";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");

	const handleReset = () => {
		if (!email.trim()) {
			return Alert.alert("Validation", "Please enter your email.");
		}

		if (!isEmailValid(email)) {
			return Alert.alert(
				"Validation",
				"Please enter a valid email address."
			);
		}

		Alert.alert("Reset Email Sent", `Check your inbox at ${email}`);
		setEmail("");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>NMDB</Text>
			<Text style={styles.text}>Forgot Password</Text>

			<TextInput
				style={styles.input}
				placeholder="Enter your registered email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<Button title="Send Reset Link" onPress={handleReset} />

			<Link href="/(auth)/login" asChild>
				<Text style={styles.linkText}>Back to Login</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
	},
	header: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 20,
	},
	text: {
		fontSize: 20,
		color: "#333",
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		width: "80%",
		marginBottom: 15,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	linkText: {
		color: "blue",
		marginTop: 20,
	},
});