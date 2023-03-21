import { Circle, Home, User, Users } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "users",
    title: "Users",
    icon: <Users size={20} />,
    navLink: "/user",
  },
  {
    id: "roles",
    title: "Role",
    icon: <User size={20} />,
    navLink: "/role",
  },
  {
    id: "permission-list",
    title: "Permission List",
    icon: <Circle size={20} />,
    navLink: "/permission-list",
  }
];
