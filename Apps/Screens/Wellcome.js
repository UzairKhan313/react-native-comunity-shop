import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import wellcomeImage from "../../assets/Images/wellcome.jpg";

export default function Wellcome({ navigation }) {
  return (
    <View className="flex-1">
      <Image source={wellcomeImage} className="w-full h-[350px] object-cover" />
      <View className="flex-1 p-8 bg-white mt-[-20] rounded-t-3xl ">
        <Text className="text-[30px] font-bold">Coumunity Shop</Text>
        <Text className="text-[18px] text-slate-500 mt-6">
          Coumunity shop where you can sell item(s) to make money or just buy
          the product for your ease.
        </Text>
        <TouchableOpacity
          className="bg-yellow-500 rounded-full p-4 mt-20"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-center text-white text=[18px] font-bold">
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
