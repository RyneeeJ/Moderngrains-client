import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PurchaseHistory from "./pages/PurchaseHistory";
import PageNotFound from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/account/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/account/profile",
        element: (
          <ProtectedRoute>
            <Profile />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/account/profile/purchase-history",
        element: (
          <ProtectedRoute>
            <PurchaseHistory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account/checkout/success",
        element: (
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        ),
      },
      {
        path: "/account/checkout/cancel",
        element: (
          <ProtectedRoute>
            <Cancel />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
