import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";

const DriversForm = () => {
  const submit = (data) => {};

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 w-[340px]">
      <Input label="first name" />
      <Input label="last name" />
      <Input type="" label="phone" />
      <Input type="number" label="id" />
      <Select
        label="driver type"
        name="driver-type"
        options={["tow-driver", "delivery-driver", "repair-driver"]}
      />
      <Input label="car number" />
      <Input type="number" label="factor number" />
      <div className="grid grid-cols-2 gap-2">
        <Button className="primeBtn" type="submit">
          Submit
        </Button>
        <Button className="primeBtn">Cancel</Button>
      </div>
    </form>
  );
};

export default DriversForm;
