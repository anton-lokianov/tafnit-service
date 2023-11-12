import SearchPanel from "../components/SearchPanel";
import Table from "../components/Table";
import Modal from "../components/shared/Modal";

const Panel = () => {
  return (
    <div className="h-full">
      <SearchPanel />
      <Table />
      <Modal id="driverForm">ss</Modal>
    </div>
  );
};

export default Panel;
