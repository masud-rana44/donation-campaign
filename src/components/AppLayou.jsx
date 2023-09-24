import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default AppLayout;
