import Button from "./ui/Button";

const DriverDataCard = ({ driver }) => {
  return (
    <div className="flex flex-col items-center bg-slate-300 py-4 px-7 rounded-sm shadow-sm shadow-black text-center gap-2">
      <div>
        <h3 className="font-semibold text-orange-800">Name:</h3>
        <p className="text-slate-900 font-normal text-xl">{`${driver?.firstName} ${driver?.lastName}`}</p>
      </div>
      <div>
        <p className="font-semibold text-orange-800">Car number:</p>
        <p className="text-slate-900 font-normal text-xl">
          {driver?.carNumber}
        </p>
      </div>
      <div>
        <p className="font-semibold text-orange-800">Type:</p>
        <p className="text-slate-900 font-normal text-xl">
          {driver?.employeeType}
        </p>
      </div>
      <div>
        <p className="font-semibold text-orange-800">Factor number:</p>
        <p className="text-slate-900 font-normal text-xl">
          {driver?.driverNumber}
        </p>
      </div>
      <div>
        <p className="font-semibold text-orange-800">Phone:</p>
        <p className="text-slate-900 font-normal text-xl">
          {driver?.phoneNumber}
        </p>
      </div>
      <div />
      <Button className="tertiaryBtn w-[7rem]">Open Shift</Button>
    </div>
  );
};

export default DriverDataCard;
