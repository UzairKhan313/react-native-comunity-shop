import React from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import Input from "../components/Input";
import { signUpValidationSchema } from "../schema/auth-schema";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuthContext } from "../context/Auth-Context";

const SignUpScreen = ({ navigation }) => {
  const { error, onRegister, isLoading } = useAuthContext();

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => onRegister(values.email, values.password)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Text className="text-[30px] text-center font-bold mt-6 text-yellow-500">
              Coumunity Shop
            </Text>
            <View className="w-[90%] flex items-center justify-center m-auto mt-12 bg-gray-200 rounded-lg p-4">
              <Text className="text-[30px] font-bold my-4">Sign Up</Text>

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
                  <Button text="Sign Up" onPress={handleSubmit} />
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
                    navigation.navigate("Login");
                  }}
                >
                  <Text className="text-[18px] text-slate-500 text-center">
                    Already Have Account ? Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;
