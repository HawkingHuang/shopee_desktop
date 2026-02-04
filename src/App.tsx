import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import ResponsiveNoticeDialog from "./components/ResponsiveNoticeDialog/ResponsiveNoticeDialog";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ResponsiveNoticeDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}

export default App;
