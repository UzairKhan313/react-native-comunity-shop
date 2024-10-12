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
    <View className="flex-col justify-center  w-full my-2 ">
      <TextInput
        name={name}
        placeholder={placeholderText}
        style={styles.input}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry
      />

      <Text
        //   style={styles.error}
        className={`text-left mt-2 text-sm ${
          error && touched ? "text-red-500" : "text-transparent"
        }`}
      >
        {error}
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 17,
    fontSize: 15,
    width: "100%",
  },
});
