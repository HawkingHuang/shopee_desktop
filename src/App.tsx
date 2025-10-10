import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
