import * as yup from "yup";
export const LoginValidationSchema=yup.object({
  userId: yup
      .string().email('Invaild Email').required("Please Enter Username"),

      password: yup
      .string()
      .required("Please Enter password")
  });

