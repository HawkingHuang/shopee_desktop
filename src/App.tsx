import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
