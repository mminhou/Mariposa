import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Navbar/Topbar';
import SidebarHandler from './components/Navbar/SidebarHandler';

function App() {
  return (
    <Router>
      <div className="App">
        <SidebarHandler />
        <Topbar />
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
