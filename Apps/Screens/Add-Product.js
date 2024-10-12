import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import { Picker } from "@react-native-picker/picker";

import { getCategoryList } from "../services/category-service";
import Input, { TextArea } from "../components/Input";
import CustomButton from "../components/Button";
import { addProductValidationSchema } from "../schema/product-shema";
import { TextInput } from "react-native-gesture-handler";

const initialValues = {
  name: "",
  desc: "",
  category: "",
  address: "",
  price: "",
  image: "",
};

const AddProductScreen = () => {
  const [error, setError] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addProductValidationSchema,
    onSubmit: (values, action) => {
      console.log(values);
    },
  });

  const getCategories = async () => {
    setCategoryList([]);
    try {
      const querySnapShot = await getCategoryList();
      querySnapShot.forEach((doc) => {
        setCategoryList((list) => [...list, doc.data()]);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View className="p-6">
      <Text className="text-[25px] font-bold">Add New Product</Text>
      <Text className="text-[16px] text-gray-500 font-bold mb-6">
        Start selling your product with comunity by creating it.
      </Text>
      <Input
        name="name"
        placeholderText={"Product Name"}
        value={values?.name}
        handleChange={handleChange("name")}
        handleBlur={handleBlur("name")}
        error={errors?.name}
        touched={touched?.name}
        secureTextEntry={true}
      />
      <TextArea
        name="desc"
        placeholderText={"Product description"}
        value={values?.desc}
        handleChange={handleChange("desc")}
        handleBlur={handleBlur("desc")}
        error={errors.desc}
        touched={touched.desc}
        numberOfLines={3}
      />
      <Input
        name="price"
        placeholderText={"Product price"}
        value={values?.price}
        handleChange={handleChange("price")}
        handleBlur={handleBlur("price")}
        error={errors.price}
        touched={touched.price}
        keyboardType="number-pad"
        numberOfLines={1}
      />
      <Input
        name="address"
        placeholderText={"Your address"}
        value={values?.address}
        handleChange={handleChange("address")}
        handleBlur={handleBlur("address")}
        error={errors.address}
        touched={touched.address}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={values.category}
          onValueChange={(itemValue) => setFieldValue("category", itemValue)}
        >
          {categoryList &&
            categoryList.map((item) => (
              <Picker.Item
                key={item.name}
                label={item.name}
                value={item.name}
              />
            ))}
        </Picker>
      </View>

      <CustomButton text="Create" onPress={handleSubmit} />
    </View>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
});
