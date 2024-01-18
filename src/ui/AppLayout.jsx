import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Header />
      <div className=" sm:grid sm:grid-rows-3 sm:grid-flow-col sm:gap-4 ">
        <Sidebar />
        <div className=" bg-slate-700 sm:row-span-3 sm:col-span-7 rounded-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
