import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Chat from "../components/Chat/Chat";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      {location.pathname === "/login" || location.pathname === "/signup" ? null : <Header />}
      <Outlet />
      <Footer />
      <Chat />
    </>
  );
}

export default AppLayout;
