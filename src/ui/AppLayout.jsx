import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="mt-12 min-h-screen grow xs:mt-14 md:mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
