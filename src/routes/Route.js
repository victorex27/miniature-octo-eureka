import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
  return <Router>
    <Routes>
      <Route exact path='/home' element={<div>hello</div>} />
      <Route path='*' element={<Home />} />
    </Routes>
  </Router>;
};


export default AllRoutes;