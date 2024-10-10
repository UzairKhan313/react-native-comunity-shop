import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WellcomeScreen from "../Screens/Wellcome";
import LoginScreen from "../Screens/Login";
import SignUpScreen from "../Screens/Sign-up";

const Stack = createStackNavigator();

const UnAuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="wellcome"
        component={WellcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthNavigation;
