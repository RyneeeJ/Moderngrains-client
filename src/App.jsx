import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PaymentMethod from "./pages/PaymentMethod";
import PurchaseHistory from "./pages/PurchaseHistory";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/account/cart" element={<Cart />} />
            <Route path="/account/profile" element={<Profile />} />
            <Route
              path="/account/profile/payment-method"
              element={<PaymentMethod />}
            />
            <Route
              path="/account/profile/purchase-history"
              element={<PurchaseHistory />}
            />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
