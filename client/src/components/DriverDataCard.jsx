import { useManageShiftMutation } from "../service/shift-api";
import { useGetDriversQuery } from "../service/driver-api";
import Button from "./ui/Button";

const DriverDataCard = ({ driver }) => {
  const [manageShift, { isLoading, isError }] = useManageShiftMutation();

  const manageDriverStatusColor = (status) => {
    if (status === "active") {
      return "bg-green-600";
    }
    return "bg-red-600";
  };

  const handleShift = async (id) => {
    try {
      await manageShift(id).unwrap();
      refetch();
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };
  return (
    <div
      className="flex flex-col items-center border relative border-gray-400 py-4 px-7 rounded shadow-md shadow-black text-center gap-3 w-[235px]
    hover:transform hover:scale-105 ease-in-out transition-all"
    >
      <div
        className={`w-7 h-7 rounded-full ${manageDriverStatusColor(
          driver.status
        )} border-b-2 border-black shadow-inner 
      shadow-black absolute top-3 right-3`}
      ></div>
      <div>
        <h3 className="font-semibold text-gray-800">Name:</h3>
        <p className="text-gray-700 font-normal text-xl">{`${driver?.firstName} ${driver?.lastName}`}</p>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Car number:</p>
        <p className="text-gray-700 font-normal text-xl">{driver?.carNumber}</p>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Type:</p>
        <p className="text-gray-700 font-normal text-xl">
          {driver?.employeeType}
        </p>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">Factor number:</p>
        <p className="text-gray-700 font-normal text-xl">
          {driver?.driverNumber}
        </p>
      </div>
      <div>
        <p className="font-semibold text-gray-800">Phone:</p>
        <p className="text-gray-700 font-normal text-xl">
          {driver?.phoneNumber}
        </p>
      </div>
      <Button
        onClick={() => handleShift(driver._id)}
        className="primeBtn w-[7rem]"
      >
        {driver.status === "active" ? "End shift" : "Start shift"}
      </Button>
    </div>
  );
};

export default DriverDataCard;
