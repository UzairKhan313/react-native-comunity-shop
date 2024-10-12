import React from "react";
import { View, Text, Image } from "react-native";
import wellcomeImage from "../../assets/Images/wellcome.jpg";
import CustomButton from "../components/Button";

export default function Wellcome({ navigation }) {
  const navigateHandler = () => {
    navigation.navigate("Register");
  };
  return (
    <View className="flex-1">
      <Image source={wellcomeImage} className="w-full h-[350px] object-cover" />
      <View className="flex-1 p-8 bg-white mt-[-20] rounded-t-3xl ">
        <Text className="text-[30px] font-bold">Coumunity Shop</Text>
        <Text className="text-[18px] text-slate-500 mt-6 mb-20">
          Coumunity shop where you can sell item(s) to make money or just buy
          the product for your ease.
        </Text>
        <CustomButton text="Join Now" onPress={navigateHandler} />
      </View>
    </View>
  );
}
