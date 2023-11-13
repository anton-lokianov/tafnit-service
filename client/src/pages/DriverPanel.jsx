import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { IoCarSportOutline } from "react-icons/io5";
import { BsPersonVcard, BsFileEarmarkPerson } from "react-icons/bs";
import Modal from "../components/shared/Modal";
import DriversForm from "../components/forms/DriverForm";
import { useDispatch } from "react-redux";
import { openModal } from "../service/ui-slice";
import DriverList from "../components/DriverList";

const DriverPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between border-b-2 border-slate-400 py-8 px-14">
        <div className="flex flex-col gap-2 w-[300px] justify-center">
          <p className="text-center text-slate-900 font-semibold text-xl">
            search for driver
          </p>
          <Input placeholder="factor number" icon={<BsPersonVcard />} />
          <Input placeholder="name" icon={<BsFileEarmarkPerson />} />
          <Input placeholder="car number" icon={<IoCarSportOutline />} />
        </div>
        <div className="flex items-center flex-col gap-2 justify-center">
          <Button
            className="secondaryBtn w-[12rem]"
            onClick={() => dispatch(openModal({ modalId: "driverForm" }))}>
            create new driver
          </Button>
          <Button className="secondaryBtn w-[12rem]">
            drivers hours report
          </Button>
        </div>
      </div>
      <DriverList />
      <Modal id="driverForm">
        <DriversForm />
      </Modal>
    </div>
  );
};

export default DriverPanel;
