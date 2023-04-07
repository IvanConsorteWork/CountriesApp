import React from "react";
import { Route, Routes } from 'react-router-dom';

import "./index.css";

import About from "./routes/About";
import CreateActivity from "./routes/CreateActivity";
import Details from "./routes/Details";
import Home from "./routes/Home";
import Landing from "./routes/Landing";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/activity' element={<CreateActivity />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
