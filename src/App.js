import './App.css';
import Header from './components/Header';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import JumpHistoryPage from './components/JumpHistoryPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import { JumperProvider } from './contexts/JumperDataContext';

function App() {
  return (
    <JumperProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage />
                }
              />
              <Route
                path='/jumping-history'
                element={
                  <JumpHistoryPage />
                }
              />
              <Route
                path="/about"
                element={
                  <AboutPage />
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </JumperProvider>
  );
}

export default App;
