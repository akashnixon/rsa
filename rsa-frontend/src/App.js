import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EncryptDecryptPage from "./pages/EncryptDecryptPage";
import SignVerifyPage from "./pages/SignVerifyPage";
import "./App.css";
import KeyDetails from "./components/KeyDetails";

const App = () => {
  return (
    <Router>
      <div className="w-full">
        <nav className="bg-gray-800 text-white p-4">
          <div className="container flex">
            <Link to="/" className="hover:text-yellow-400 pl-8 px-4">
              Home
            </Link>
            <Link to="/encrypt-decrypt" className="hover:text-yellow-400 px-4">
              Encrypt/Decrypt
            </Link>
            <Link to="/sign-verify" className="hover:text-yellow-400 px-4">
              Sign/Verify
            </Link>
          </div>
        </nav>

        <div className="flex flex-row">
          <div className="container mx-auto mt-4 w-2/3 px-10 py-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/encrypt-decrypt" element={<EncryptDecryptPage />} />
              <Route path="/sign-verify" element={<SignVerifyPage />} />
            </Routes>
          </div>

          <div className="p-10 w-1/3">
            <KeyDetails />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;