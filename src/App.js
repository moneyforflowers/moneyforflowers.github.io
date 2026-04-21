import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Stats from './Stats.js';
import Streamers from './Streamers.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/Stats">Stats</Link> |{" "}
          <Link to="/Streamers">Streamers</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Streamers" element={<Streamers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
