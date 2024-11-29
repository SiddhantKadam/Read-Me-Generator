import './App.css';
import Form from './pages/Form.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preview from './pages/Preview';
import Generate from './pages/Generate.jsx';
import Card from './component/card/Card.jsx';

import Toaster from './component/toaster/toaster.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { React, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  return (
    <Router>
        <marquee className="marqueeClass">This application is good for laptop or PC size. It may not work well on mobile or tablet.</marquee>
      <div className="App">
        <video autoPlay loop muted className="background-video">
          <source src={`../background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="centered-form w-full">
          <Card>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/generate" element={<Generate />} />
            </Routes>
          </Card>
        </div>
      </div>
      <Toaster message={message} />
      <ToastContainer />
    </Router>
  );
}

export default App;
