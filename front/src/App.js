import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Statistiques from "./Statistiques";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistiques">Statistiques</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/statistiques" element={<Statistiques />} />
        <Route path="*" element={<p>No match</p>} />
      </Routes>
    </>
  );
}

export default App;
