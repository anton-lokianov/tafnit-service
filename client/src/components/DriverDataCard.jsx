import Button from "./ui/Button";

const DriverDataCard = ({ driver }) => {
  return (
    <div
      className="flex flex-col items-center border border-gray-400 py-4 px-7 rounded shadow-md shadow-black text-center gap-3
    hover:transform hover:scale-105 ease-in-out transition-all">
      <div
        className="w-8 h-8 rounded-full bg-red-600 border-b-2 border-black shadow-inner 
      shadow-black flex items-center justify-center"></div>
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
      <Button className="primeBtn w-[7rem]">Open Shift</Button>
    </div>
  );
};

export default DriverDataCard;
