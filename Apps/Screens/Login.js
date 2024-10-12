import { useFormik } from "formik";
import React, { act } from "react";
import { View, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { loginValidationSchema } from "../schema/auth-schema";
import Input from "../components/Input";
import CustomButton from "../components/Button";

const LoginScreen = ({ navigation }) => {
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginValidationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <View className="w-[90%] flex items-center justify-center m-auto mt-12 bg-gray-200 rounded-lg p-4">
      <Text className="text-[30px] font-bold my-4">Login</Text>

      <Input
        name="email"
        placeholderText={"Your Email"}
        value={values.email}
        handleChange={handleChange("email")}
        handleBlur={handleBlur("email")}
        keyboardType="email-address"
        error={errors.email}
        touched={touched.email}
      />
      <Input
        name="password"
        placeholderText={"Your password"}
        value={values.password}
        handleChange={handleChange("password")}
        handleBlur={handleBlur("password")}
        error={errors.password}
        touched={touched.password}
      />
      <View className="w-full mx-auto mt-4">
        <CustomButton text="Sign Up" onPress={handleSubmit} />
      </View>
      <View className="w-full mx-auto mt-8">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text className="text-[18px] text-slate-500 text-center">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
