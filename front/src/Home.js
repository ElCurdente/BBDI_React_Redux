import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play, set_dice, set_win_type, set_total } from './store/actions/actions-types';

import GlobalStyles from './Styles/GlobalStyles';
import Card from './Styles/Card';
import Button from './Styles/Button';
import HomeStyles from './Styles/HomeStyles';
import Input from './Styles/Input';
import Game from './components/Game';
import Gains from './components/Gains';

function Home() {

  return (
    <>
      <div className="App">
        {/* <HomeStyles /> */}
        <Game />
        <Gains />
      </div>
    </>
  );
}

export default Home;
