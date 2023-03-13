import { useFormik } from "formik";
import InputGroup from "./InputGroup";

const validate = (values: Record<string, string>) => {
  const errors: Record<string, string> = {};

  if (!values.withdrawalAmount) {
    errors.withdrawalAmount = "Required";
  } else if (parseInt(values.withdrawalAmount) > 9999) {
    errors.withdrawalAmount = " Withdrawals cannot exceed 9999NGN";
  } else if (parseInt(values.withdrawalAmount) < 500) {
    errors.withdrawalAmount = "Withdrawals cannot exceed 500NGN";
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email as string)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (typeof values.phone === "string" && values.phone.length !== 11) {
    errors.phone = "Must be 11 characters";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      withdrawalAmount: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="stack-l">
        <InputGroup
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
        />
        <InputGroup
          type="text"
          name="phone"
          value={formik.values.phone}
          label="Phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter phone number"
          willSubmit={true}
          errorObj={formik.errors}
        />
        <InputGroup
          type="text"
          name="withdrawalAmount"
          value={formik.values.withdrawalAmount}
          label="Withdraw"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter withdrawal amount"
          willSubmit={true}
          errorObj={formik.errors}
          highlightError={true}
          data={{
            currency: "NGN",
            minPayoutLimit: 500,
            maxPayoutLimit: 9999,
            balance: 10000,
          }}
        />
      </form>
    </>
  );
};

export default SignupForm;
