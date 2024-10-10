import * as React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/Home";
import ProfileScreen from "../Screens/Profile";
import ExploreProductScreen from "../Screens/Explore-Product";
import AddProductScreen from "../Screens/Add-Product";

const Tab = createBottomTabNavigator();

function AuthNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTinColor: "#000" }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreProductScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Explore
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="addProduct"
        component={AddProductScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Add Product
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="camera" />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="person-circle" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AuthNavigation;
