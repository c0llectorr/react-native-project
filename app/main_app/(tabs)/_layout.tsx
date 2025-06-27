import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/utils/constants";
import { useTheme } from "@/context/ThemeContext";

export default function TabsLayout() {
	const { theme } = useTheme();
	const c = Colors[theme];
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: c.cardBackground },
				tabBarActiveTintColor: c.iconSelected,
				tabBarInactiveTintColor: c.iconDefault,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarShowLabel: false,
					tabBarAccessibilityLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="home-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="movies"
				options={{
					title: "Movies",
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="film-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="tvShows"
				options={{
					title: "TV Shows",
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="tv-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="search-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarShowLabel: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="person-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}