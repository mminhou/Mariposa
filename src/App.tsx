import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="hidden md:block h-8 bg-gray-100"></div>
        <NavBar />
        <AppRouter />
        <div className="h-32 bg-white-500">고정된 높이</div>
        <div className="h-32 bg-white-500">고정된 높이</div>
        <div className="h-32 bg-white-500">고정된 높이</div>
        <div className="h-32 bg-white-500">고정된 높이</div>
        <div className="h-32 bg-white-500">고정된 높이</div>
        <div className="h-32 bg-white-500">고정된 높이</div>
      </div>
    </Router>
  );
}

export default App;
