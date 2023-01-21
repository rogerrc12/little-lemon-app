import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState(""),
  [loggedIn, setLoggedIn] = useState(false),
    [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>

      {!loggedIn ? 
      <>
            <Text style={styles.regularText}>Login to continue </Text>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry keyboardType="visible-password" />
        <Pressable style={styles.button} onPress={() => setLoggedIn(prev => !prev)}>
          <Text style={styles.btnText}>Log In</Text>
        </Pressable>
      </View></> : <Text style={styles.regularText}>You are logged in!</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  loginForm: {
    margin: 10,
  },
  button: {
    marginVertical: 10,
    margin: 100,
    borderRadius: "100%",
    paddingVertical: 12,
    maxWidth: 200,
    backgroundColor: "#EE9972"
  },
  btnText: {
    textAlign: "center",
    fontSize: 20
  },
  input: {
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    margin: 12,
    height: 30,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
  },
});
