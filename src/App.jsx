import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account/cart" element={<Cart />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/payment-method" element={<PaymentMethod />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
