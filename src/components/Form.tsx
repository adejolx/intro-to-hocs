import { useFormik } from "formik";
import BaseInput from "./BaseInput";

const validate = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <BaseInput
          type="email"
          name="email"
          value={formik.values.email}
          label={"Email Address"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Email"
          errorObj={formik.errors}
          // willSubmit={true}
          isOptional={true}
          highlightError={true}
          data={{
            currency: "NGN",
            minPayoutLimit: 23,
            maxPayoutLimit: 24,
            balance: 100,
          }}
        />
      </form>
    </>
  );
};

export default SignupForm;
