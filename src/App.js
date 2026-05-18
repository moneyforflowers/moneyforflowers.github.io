import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Stats from './Stats.js';
import Streamers from './Streamers.js';
import Direct from './Direct.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/stats">Stats</Link> |{" "}
          <Link to="/direct">Direct</Link> |{" "}
          <Link to="/streamers">Streamers</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/direct" element={<Direct />} />
          <Route path="/streamers" element={<Streamers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
