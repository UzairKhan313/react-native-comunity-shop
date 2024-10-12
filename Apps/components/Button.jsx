import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, vairant }) => {
  if (vairant === "primary") {
    return (
      <TouchableOpacity
        className="text-yellow-500  bg-transparent border-2 border-yellow-500 rounded-full p-4"
        onPress={onPress}
      >
        <Button
          className="text-center text-white text=[18px] font-bold"
          title={text}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      className="bg-yellow-500 rounded-full p-4"
      onPress={onPress}
    >
      <Text className="text-center text-white text=[18px] font-bold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
