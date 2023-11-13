import { useGetDriversQuery } from "../service/driver-api";
import DriverDataCard from "./DriverDataCard";

const DriverList = () => {
  const { data: drivers, isFetching, isError } = useGetDriversQuery();
  console.log(drivers);

  return (
    <div className="flex flex-wrap p-6 gap-3 mx-auto">
      {drivers?.map((driver) => (
        <DriverDataCard key={driver.id} driver={driver} />
      ))}
    </div>
  );
};

export default DriverList;
