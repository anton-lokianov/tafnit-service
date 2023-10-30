import { GrSystem } from "react-icons/gr";
import { CiDesktop } from "react-icons/ci";
import { LiaUserClockSolid } from "react-icons/lia";
import { TbUserCog } from "react-icons/tb";
import { GiCartwheel } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";

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
    icon: <GrSystem />,
  },
  {
    path: "",
    name: "Support",
    icon: <GrSystem />,
  },
  {
    path: "",
    name: "Documentation",
    icon: <HiOutlineDocumentText />,
  },
];
