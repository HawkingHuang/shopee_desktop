import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Chat from "../components/Chat/Chat";

function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
      <Chat />
    </>
  );
}

export default AppLayout;
