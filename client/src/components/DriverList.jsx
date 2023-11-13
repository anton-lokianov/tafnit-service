import { useGetDriversQuery } from "../service/driver-api";
import DriverDataCard from "./DriverDataCard";

const DriverList = () => {
  const { data: drivers, isFetching, isError } = useGetDriversQuery();

  return (
    <div className="flex p-6 justify-between">
      {drivers?.map((driver) => (
        <DriverDataCard key={driver.id} driver={driver} />
      ))}
    </div>
  );
};

export default DriverList;
