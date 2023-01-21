import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";

export default function WelcomeScreen() {
  const [firstName, setFirstName] = useState("");

  return (
    <ScrollView indicatorStyle="white" style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyles.infoText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your
        experience with us!
      </Text>
      <TextInput value={firstName} onChangeText={setFirstName} style={welcomeStyles.input} placeholder="First name" />
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 28, color: "#FFF", textAlign: "center", padding: 40 },
  infoText: { fontSize: 20, color: "#FFF", textAlign: "center", padding: 20 },
  input: {
    height: 36,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
