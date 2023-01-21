import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.header}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  header: { flex: 0.15, backgroundColor: "#EE9972" },
});
