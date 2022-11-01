import './App.css';
import { BrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
