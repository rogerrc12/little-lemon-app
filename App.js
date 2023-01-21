import { StyleSheet, View } from "react-native";
import Footer from "./components/Footer";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LoginScreen from "./src/LoginScreen";

export default function App() {
  return (
    <>
      <View style={appStyles.container}>
        <LittleLemonHeader />
        <LoginScreen />
      </View>

      <View style={appStyles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  footerContainer: { backgroundColor: "#333" },
});
