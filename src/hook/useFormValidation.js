import { useState } from "react";

const useFormValidation = (initialvalues , validate) => {
const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

   // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
   // handle form submit
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(); // agar errors nahi hai to callback (submit logic) chalayenge
    }
  };
   return { values, errors, handleChange, handleSubmit };
}

export default useFormValidation;