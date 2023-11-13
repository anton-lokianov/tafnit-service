import { useForm } from "react-hook-form";

export const useDriverFormValid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      id: "",
      employeeType: "",
      carNumber: "",
      driverNumber: "",
    },
  });

  // Define your validation schema here
  const validationSchema = {
    firstName: {
      required: "First name is required",
      minLength: {
        value: 2,
        message: "First name must be at least 2 characters",
      },
    },
    lastName: {
      required: "Last name is required",
      minLength: {
        value: 2,
        message: "Last name must be at least 2 characters",
      },
    },
    phoneNumber: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10,}$/, // Simple regex for phone number, adjust as needed
        message: "Invalid phone number",
      },
    },
    id: {
      required: "ID is required",
      pattern: {
        value: /^[0-9]{9,}$/, // Simple regex for ID, adjust as needed
        message: "Invalid ID number",
      },
    },
    employeeType: {
      required: "Driver type is required",
    },
    carNumber: {
      required: "Car number is required",
    },
    driverNumber: {
      required: "Factor number is required",
    },
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    validationSchema,
  };
};
