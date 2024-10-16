import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";

import AppLayout from "./ui/AppLayout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PurchaseHistory from "./pages/PurchaseHistory";
import PageNotFound from "./pages/PageNotFound";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./pages/Signup";
import ErrorFallback from "./ui/ErrorFallback";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppLayout />
      </ErrorBoundary>
    ),
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
      { path: "/signup", element: <Signup /> },
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
        <Toaster
          toastOptions={{
            className: "bg-yellow-700 text-amber-50 max-w-full",
            style: {
              background: "#a16207",
              color: "#fffbeb",
              maxWidth: "100%",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
