import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Gallery from './Gallery';
import SingleImage from './SingleImage';

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={false} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Gallery/>} />
        <Route path="/image/:id" element={<SingleImage/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;