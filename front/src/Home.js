import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play, set_dice } from './store/actions/actions-types';

import GlobalStyles from './Styles/GlobalStyles';
import Card from './Styles/Card';
import Button from './Styles/Button';
import HomeStyles from './Styles/HomeStyles';
import Input from './Styles/Input';

function Home() {


  // lecture du store de la source de vérité read-only
  // const { messages } = useSelector(state => state.message);
  const { number, launch, dices, win_types, result } = useSelector(state => state.yam);



  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('play lancé :' + launch);
    if (launch) {
      for (let i = 0; i < number; i++) {
        const result_1 = Math.floor(Math.random() * 6) + 1;
        const result_2 = Math.floor(Math.random() * 6) + 1;
        const result_3 = Math.floor(Math.random() * 6) + 1;
          dispatch(set_dice(result_1, result_2, result_3));
          
      }
      console.log(dices);
    }
  }, [launch]);

  return (
    <>
    <div className="App">
      {/* <HomeStyles /> */}
      <Card >
        <h1>Lancer une série</h1>
        <Input type="number" placeholder="Choisir le nombre de parties" onChange={(e) => dispatch(set_number(e.target.value))} />
        <Button onClick={() => dispatch(play())} > Lancer les dés </Button>
      </Card>
    </div>
    </>
  );
}

export default Home;
