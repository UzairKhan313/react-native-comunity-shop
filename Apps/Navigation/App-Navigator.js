import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "../context/Auth-Context";
import UnAuthNavigatior from "./UnAuthNavigator";
import AuthNavigation from "./AuthNavigator";

const AppNavigation = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      {!isAuthenticated ? <UnAuthNavigatior /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
