import { useDriverFormValid } from "../../validations/useDriverFormValid";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { useDispatch } from "react-redux";
import { closeModal } from "../../service/ui-slice";
import { useCreateDriverMutation } from "../../service/driver-api";

const DriversForm = () => {
  const { register, handleSubmit, errors, reset, validationSchema } =
    useDriverFormValid();
  const dispatch = useDispatch();
  const [createDriver, { isLoading, error }] = useCreateDriverMutation();

  const handleCancel = () => {
    reset();
    dispatch(closeModal({ modalId: "driverForm" }));
  };

  const submit = handleSubmit(async (data) => {
    try {
      const result = await createDriver(data).unwrap();
      reset();
      if (result) dispatch(closeModal({ modalId: "driverForm" }));
    } catch (error) {
      console.error("Failed to create driver:", error);
    }
  });

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 w-[340px]">
      <Input
        label="First Name"
        {...register("firstName", validationSchema.firstName)}
        error={errors.firstName}
      />
      <Input
        label="Last Name"
        {...register("lastName", validationSchema.lastName)}
        error={errors.lastName}
      />
      <Input
        type=""
        label="phone"
        {...register("phoneNumber", validationSchema.phoneNumber)}
        error={errors.phoneNumber}
      />
      <Input
        type="number"
        label="id"
        {...register("id", validationSchema.id)}
        error={errors.id}
      />
      <Select
        label="driver type"
        name="driver-type"
        options={["tow-driver", "delivery-driver", "repair-driver"]}
        {...register("employeeType", validationSchema.employeeType)}
        error={errors.employeeType}
      />
      <Input
        label="car number"
        {...register("carNumber", validationSchema.carNumber)}
        error={errors.carNumber}
      />
      <Input
        type="number"
        label="factor number"
        {...register("driverNumber", validationSchema.driverNumber)}
        error={errors.driverNumber}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button className="primeBtn" type="submit">
          {isLoading ? "Submitting..." : "submit"}
        </Button>
        <Button className="primeBtn" type="button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
      {error && <p className="text-red-500">couldnt create driver</p>}
    </form>
  );
};

export default DriversForm;
