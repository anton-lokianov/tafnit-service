import { CiDesktop } from "react-icons/ci";
import { LiaUserClockSolid } from "react-icons/lia";
import { TbUserCog } from "react-icons/tb";
import { GiCartwheel } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { BsShieldLock } from "react-icons/bs";

export const sidebarNav = [
  {
    path: "/panel",
    name: "Operating System",
    icon: <CiDesktop />,
  },
  {
    path: "",
    name: "Hours Report",
    icon: <LiaUserClockSolid />,
  },
  {
    path: "/userPanel",
    name: "User Management",
    icon: <TbUserCog />,
  },
  {
    path: "/driverPanel",
    name: "Driver Management",
    icon: <GiCartwheel />,
  },
  {
    path: "",
    name: "Notifications",
    icon: <IoIosNotificationsOutline />,
  },
  {
    path: "",
    name: "Analytics",
    icon: <IoAnalyticsOutline />,
  },
  {
    path: "",
    name: "Logs",
    icon: <BsShieldLock />,
  },
  {
    path: "",
    name: "Support",
    icon: <BsQuestionCircle />,
  },
  {
    path: "",
    name: "Documentation",
    icon: <HiOutlineDocumentText />,
  },
];
