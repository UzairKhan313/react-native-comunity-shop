import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppNavigation from "./Apps/Navigation/App-Navigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 ">
        <AppNavigation />
      </View>
    </>
  );
}
