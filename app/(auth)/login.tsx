import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/Button";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();
	const router = useRouter();

	const handleLogin = async () => {
		const success = await login(username, password);
		if (success) {
			router.replace("../main_app");
		} else {
			Alert.alert("Login Failed", "Invalid username or password.");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>NMDB</Text>
			<Text style={styles.text}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Email or Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<Button title="Login" onPress={handleLogin} />
			<Link href="/forgot-password" asChild>
				<Text style={styles.linkText}>Forgot Password?</Text>
			</Link>
			<Link href="/signup" asChild>
				<Text style={styles.linkText}>
					Don't have an account? Sign Up
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