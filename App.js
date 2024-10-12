import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";

import AppNavigation from "./Apps/Navigation/App-Navigator";
import { AuthContextProvider } from "./Apps/context/Auth-Context";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <SafeAreaView style={styles.container} className="flex-1 bg-white ">
        <AuthContextProvider>
          <AppNavigation />
        </AuthContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar ? StatusBar.currentHeight : 0,
  },
});
