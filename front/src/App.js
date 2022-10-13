import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Gains from "./components/Gains";

import GlobalStyles from './Styles/GlobalStyles';
import Sidebar from "./Styles/Sidebar";
import AppWrapper from "./Styles/AppWrapper";

function Navigation() {
  return (
    <Sidebar>
      <h1>Dices Game</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/home"> <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" /></svg>Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistiques"><svg width="16" height="16" viewBox="0 0 416 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56 480H24C17.6348 480 11.5303 477.471 7.02944 472.971C2.52856 468.47 0 462.365 0 456V312C0 305.635 2.52856 299.53 7.02944 295.029C11.5303 290.529 17.6348 288 24 288H56C62.3652 288 68.4697 290.529 72.9706 295.029C77.4714 299.53 80 305.635 80 312V456C80 462.365 77.4714 468.47 72.9706 472.971C68.4697 477.471 62.3652 480 56 480V480ZM280 480H248C241.635 480 235.53 477.471 231.029 472.971C226.529 468.47 224 462.365 224 456V216C224 209.635 226.529 203.53 231.029 199.029C235.53 194.529 241.635 192 248 192H280C286.365 192 292.47 194.529 296.971 199.029C301.471 203.53 304 209.635 304 216V456C304 462.365 301.471 468.47 296.971 472.971C292.47 477.471 286.365 480 280 480V480ZM392 480H360C353.635 480 347.53 477.471 343.029 472.971C338.529 468.47 336 462.365 336 456V104C336 97.6348 338.529 91.5303 343.029 87.0294C347.53 82.5286 353.635 80 360 80H392C398.365 80 404.47 82.5286 408.971 87.0294C413.471 91.5303 416 97.6348 416 104V456C416 462.365 413.471 468.47 408.971 472.971C404.47 477.471 398.365 480 392 480V480ZM168 480H136C129.635 480 123.53 477.471 119.029 472.971C114.529 468.47 112 462.365 112 456V24C112 17.6348 114.529 11.5303 119.029 7.02944C123.53 2.52856 129.635 0 136 0H168C174.365 0 180.47 2.52856 184.971 7.02944C189.471 11.5303 192 17.6348 192 24V456C192 462.365 189.471 468.47 184.971 472.971C180.47 477.471 174.365 480 168 480V480Z" fill="white" />
            </svg>Statistiques</NavLink>
          </li>
        </ul>
      </nav>
    </Sidebar>
  );
}

function App() {

  return (
    <>
      <GlobalStyles />
      <AppWrapper >

        <Navigation />
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/statistiques" element={<Gains />} />
          <Route path="*" element={<p>No match</p>} />
        </Routes>
      </AppWrapper>

    </>
  );
}

export default App;
