import React from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import Input from "../components/Input";
import { signUpValidationSchema } from "../schema/auth-schema";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
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
            <View className="w-[90%] flex items-center justify-center m-auto mt-12 bg-gray-200 rounded-lg p-4">
              <Text className="text-[30px] font-bold my-4">Sign Up</Text>
              <Input
                name="name"
                placeholderText={"Your Name"}
                value={values.name}
                handleChange={handleChange("name")}
                handleBlur={handleBlur("name")}
                keyboardType="email-address"
                error={errors.name}
                touched={touched.name}
              />
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
                <Button text="Sign Up" onPress={handleSubmit} />
              </View>
              <View className="w-full mx-auto mt-8">
                <TouchableOpacity
                  onPress={() => {
                    console.log("On lgoin press");

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
