import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useFormik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";

import { loginValidationSchema } from "../schema/auth-schema";
import Input from "../components/Input";
import CustomButton from "../components/Button";
import { useAuthContext } from "../context/Auth-Context";

const LoginScreen = ({ navigation }) => {
  const { error, onLogin, isLoading } = useAuthContext();
  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginValidationSchema,
      onSubmit: (values, action) => {
        onLogin(values.email, values.password);
        action.resetForm();
      },
    });
  return (
    <>
      <Text className="text-[30px] text-center font-bold mt-6 text-yellow-500">
        Coumunity Shop
      </Text>
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
        {isLoading ? (
          <ActivityIndicator animate={true} color={MD2Colors.yellow800} />
        ) : (
          <View className="w-full mx-auto mt-4">
            <CustomButton text="Sign In" onPress={handleSubmit} />
          </View>
        )}
        {error && (
          <Text className={`text-left mt-2 text-sm  text-red-500`}>
            {error}
          </Text>
        )}
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
    </>
  );
};

export default LoginScreen;
