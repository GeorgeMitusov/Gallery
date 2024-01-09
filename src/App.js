import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from './components/AnimatedRoutes';

import './styles/App.scss'

const Supreme = () => {

  const Render = () => (
    <Router>
      <AnimatedRoutes/>
    </Router>
  )

  return (
    <Render />
  )
}

export default Supreme