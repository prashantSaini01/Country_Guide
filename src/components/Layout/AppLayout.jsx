import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content (Outlet) will take up available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Sticky Footer at Bottom */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default AppLayout;
