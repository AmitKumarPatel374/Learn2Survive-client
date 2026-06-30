import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import SideLeftBar from "../components/common/SideLeftBar ";
import DashboardFooter from "../components/common/DashboardFooter";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b1326]">
      <Navbar />

      {/* Content */}
      <div className="flex flex-1 pt-16">
        <SideLeftBar />

        <main className="ml-80 flex-1 p-6">
          <Outlet />
        </main>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;