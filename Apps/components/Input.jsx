import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Input = ({
  name,
  placeholderText,
  handleChange,
  value,
  keyboardType,
  handleBlur,
  error,
  touched,
  secureTextEntry,
}) => {
  return (
    <View className="flex-col justify-center  w-full mb-1 ">
      <TextInput
        name={name}
        placeholder={placeholderText}
        style={styles.input}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        keyboardType={keyboardType}
      />

      <Text
        className={`text-left my-1 text-sm ${
          error && touched ? "text-red-500" : "text-transparent"
        }`}
      >
        {error}
      </Text>
    </View>
  );
};

export default Input;

export const TextArea = ({
  name,
  placeholderText,
  handleChange,
  value,
  keyboardType,
  handleBlur,
  error,
  touched,
  numberOfLines,
}) => {
  return (
    <View className="flex-col justify-center  w-full mb-1 ">
      <TextInput
        name={name}
        placeholder={placeholderText}
        style={styles.textArea}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines || 3}
      />

      <Text
        className={`text-left my-1 text-sm ${
          error && touched ? "text-red-500" : "text-transparent"
        }`}
      >
        {error}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 17,
    fontSize: 15,
    width: "100%",
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 17,
    fontSize: 15,
    textAlignVertical: "top",
    width: "100%",
  },
});
