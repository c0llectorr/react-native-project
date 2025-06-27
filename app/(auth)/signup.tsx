import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "@context/AuthContext";
import { Button } from "@components/Button";
import {
	isEmailValid,
	isPasswordStrong,
	doPasswordsMatch,
} from "@utils/validators";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const router = useRouter();
	const { login } = useAuth();

	const handleSignup = async () => {
		if (!name.trim()) return Alert.alert("Validation", "Name is required.");
		if (!isEmailValid(email))
			return Alert.alert("Validation", "Invalid email.");
		if (!isPasswordStrong(password))
			return Alert.alert("Validation", "Password too weak.");
		if (!doPasswordsMatch(password, confirm))
			return Alert.alert("Validation", "Passwords do not match.");
		// Mock signup: directly login
		const success = await login("admin", "admin123");
		if (success) router.replace("./main_app/(tabs)/");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>NMDB</Text>
			<Text style={styles.text}>Sign Up</Text>
			<TextInput
				style={styles.input}
				placeholder="Name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<TextInput
				style={styles.input}
				placeholder="Confirm Password"
				secureTextEntry
				value={confirm}
				onChangeText={setConfirm}
			/>
			<Button title="Sign Up" onPress={handleSignup} />
			<Link href="/(auth)/login" asChild>
				<Text style={styles.linkText}>
					Already have an account? Login
				</Text>
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
	text: { fontSize: 24, color: "#333", marginBottom: 20 },
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		width: "80%",
		marginBottom: 15,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	linkText: { color: "blue", marginTop: 20 },
});