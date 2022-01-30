import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/request' element={<Home/>} />
        <Route path='/kyc' element={<Home />} />
        <Route path='/report' element={<Home />} />
        <Route path='/trail' element={<Home />} />
        <Route path='/user' element={<Home />} />
        <Route path='/setting' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
