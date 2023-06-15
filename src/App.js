import React from 'react';

// import components
import { Route , Routes , BrowserRouter } from "react-router-dom";

import Home from './Pages/Home'

const App = () => {
  return (

<BrowserRouter>
<Routes>
        
        <Route path="/furniture" element={<Home/>}/>
    
      </Routes>
</BrowserRouter>
      
   
 
  )
 
};

export default App;
