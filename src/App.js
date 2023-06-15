import React from 'react';

// import components
import { Route , Routes } from "react-router-dom";

import Home from './Pages/Home'

const App = () => {
  return (


      
    <Routes>
        
    <Route path="/furniture" element={<Home/>}/>

  </Routes>
 
  )
 
};

export default App;
