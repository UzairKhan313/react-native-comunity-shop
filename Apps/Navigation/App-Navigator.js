import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import UnAuthNavigatior from "./UnAuthNavigator";
import AuthNavigation from "./AuthNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/* <UnAuthNavigatior /> */}
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
