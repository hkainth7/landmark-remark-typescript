import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Landmark from './components/Landmark';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/landmark-remark' element={<PrivateRoute> <Landmark /> </PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
