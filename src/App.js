import './App.css';
import Form from './pages/Form.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preview from './pages/Preview';
import Card from './component/card/Card.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted className="background-video">
          <source src={`../background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="centered-form">
          <Card>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/preview" element={<Preview />} />
            </Routes>
          </Card>
        </div>
      </div>
    </Router>
  );
}

export default App;
