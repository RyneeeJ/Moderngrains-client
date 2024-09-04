import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="mt-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
