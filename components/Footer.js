import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.infoText}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: { marginBottom: 20, backgroundColor: "#EE9972" },
  infoText: { padding: 10, fontSize: 16, color: "black", textAlign: "center", fontStyle: "italic" },
});
