import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EncryptDecryptPage from './pages/EncryptDecryptPage';
import SignVerifyPage from './pages/SignVerifyPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className='nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/encrypt-decrypt">Encrypt/Decrypt</Link></li>
            <li><Link to="/sign-verify">Sign/Verify</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/encrypt-decrypt" element={<EncryptDecryptPage />} />
          <Route path="/sign-verify" element={<SignVerifyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
