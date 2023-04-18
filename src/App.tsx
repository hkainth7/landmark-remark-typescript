import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Landmark from './components/Landmark';
import { ContextProvider } from './contexts/Contexts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <ContextProvider>
        <ChakraProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/landmark-remark' element={<PrivateRoute> <Landmark /> </PrivateRoute>} />
            </Routes>
          </Router>
        </ChakraProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
