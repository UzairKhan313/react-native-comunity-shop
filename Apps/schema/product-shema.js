import * as yup from "yup";

export const addProductValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, ({ min }) => `Product name  must be at least ${min} characters`)
    .required("Product name is Required"),
  desc: yup
    .string()
    .min(
      10,
      ({ min }) => `Prodcut description must be at least ${min} characters`
    )
    .required("Product descriptionis required"),
  price: yup.string().required("Product Price  is Required"),

  category: yup.string().required("Email Address is Required"),
  address: yup
    .string()
    .min(5, ({ min }) => `Address   must be at least ${min} characters`)
    .required("Address is Required"),
});
