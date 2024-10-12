import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import AppNavigation from "./Apps/Navigation/App-Navigator";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <View style={styles.container} className="flex-1 bg-white ">
        <AppNavigation />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar ? StatusBar.currentHeight : 0,
  },
});
