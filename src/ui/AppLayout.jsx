import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="xs:mt-14 mt-12 md:mt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
