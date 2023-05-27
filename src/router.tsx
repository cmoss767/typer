import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import KeyBoardPage from "./pages/KeyBoardPage";
import Home from "./pages/Home";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="keyboard" element={<KeyBoardPage />} />
    </Routes>
  );
};

export default Router;
