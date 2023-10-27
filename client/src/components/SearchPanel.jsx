import Button from "./ui/Button";
import Input from "./ui/Input";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import Notification from "./Notification";

const SearchPanel = () => {
  return (
    <div className="flex justify-between py-3 px-16 border-b-4 border-slate-400 w-full">
      <div className="flex flex-col">
        <h2 className="h2">search engine</h2>
        <form action="" className="flex flex-col gap-2">
          <Input placeholder="Phone" icon={<AiOutlinePhone />} />
          <Input placeholder="Client ID" icon={<BsPersonVcard />} />
          <Input placeholder="Service call" icon={<RiCustomerService2Line />} />
          <Input placeholder="Vehicle licensing" icon={<LiaCarSideSolid />} />
        </form>
      </div>
      <Notification />
      <div className="flex justify-center items-center flex-col gap-2">
        <Button className="secondaryBtn w-[12rem]">Customer locator</Button>
        <Button className="secondaryBtn w-[12rem]">Service locator</Button>
      </div>
    </div>
  );
};

export default SearchPanel;
