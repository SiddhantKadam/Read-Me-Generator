import './App.css';
import Form from './pages/Form.jsx';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={`../background.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Form />
    </div>
  );
}

export default App;
