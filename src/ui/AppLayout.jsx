import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
