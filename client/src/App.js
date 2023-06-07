// import { useState, useEffect } from "react";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/layout/Home';
import Layout from './components/layout/Layout';
import Footer from './components/layout/Footer';
// import Sidenav from './components/Sidenav';

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    
   <div className="App">
    <BrowserRouter>
    {/* <AppLayout/> */}
     <Routes>
       <Route path ="/" exact element= {<Layout />}>
       <Route index element={<Home />} />
      
      {/* <Route path="/explore" element={<Explore />} />
      <Route path="/statistics" element={<Statistics />}/>
      <Route path="/settings" element={<Settings />} /> */}
      </Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
     {/* <h1>Page Count: {count}</h1> */}
   </div>
  );
}

export default App;




























