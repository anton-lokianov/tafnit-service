import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const DriverPanel = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between border-b-2 border-slate-400 py-8 px-14">
        <div className="flex flex-col gap-2 w-[300px] justify-center">
          <p className="text-center text-slate-900 font-semibold text-xl">
            search for driver
          </p>
          <Input placeholder="factor number" />
          <Input placeholder="name" />
          <Input placeholder="car number" />
        </div>
        <div className="flex items-center flex-col gap-2 justify-center">
          <Button className="secondaryBtn w-[12rem]">create new driver</Button>
          <Button className="secondaryBtn w-[12rem]">
            drivers hours report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DriverPanel;
