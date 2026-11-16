import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Header from "./compountents/Header";

export default function App() {
  return (
    <div className="w-full h-dvh overflow-auto" data-theme="light">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="*" element={<h1> Error 404 || Not Founded page </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
