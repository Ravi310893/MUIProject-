import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/HomePage/index';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;