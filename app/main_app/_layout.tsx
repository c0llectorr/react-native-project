import React from "react";
import { OuterLayout } from "@/components/OuterLayout";
import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";

export default function MainAppLayout() {
	const { user } = useAuth();
	if (!user) return <Redirect href="../(auth)/login" />;
	return <OuterLayout />;
}