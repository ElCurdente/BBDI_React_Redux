import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play, set_dice, set_win_type, set_total, reset_current, set_current, yams, brelan, petite_suite, grande_suite } from '../store/actions/actions-types';

import GlobalStyles from '../Styles/GlobalStyles';
import Card from '../Styles/Card';
import Button from '../Styles/Button';
import HomeStyles from '../Styles/HomeStyles';
import Input from '../Styles/Input';

function Game() {

  // lecture du store de la source de vérité read-only
  // const { messages } = useSelector(state => state.message);
  const { number, launch, total, dices, win_types, result, current } = useSelector(state => state.yam);

  const verif = ['666', '555', '444', '333', '222', '111', '123', '213', '231', '132', '312', '321', '456', '546', '564', '465', '645', '654'];


  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('play lancé :' + launch);
    if (launch) {
      console.log(number);
      dispatch(reset_current());
      const current_result = {
        yams: 0,
        brelan: 0,
        petite_suite: 0,
        grande_suite: 0,
      }
      console.log(current_result);
        
      for (let i = 0; i < number; i++) {
        const result_1 = Math.floor(Math.random() * 6) + 1;
        const result_2 = Math.floor(Math.random() * 6) + 1;
        const result_3 = Math.floor(Math.random() * 6) + 1;
        const somme = result_1 + result_2 + result_3;
        dispatch(set_dice(result_1, result_2, result_3));


        if (verif.indexOf(result_1 + '' + result_2 + '' + result_3) !== -1) {
          if (result_1 === result_2 && result_1 === result_3 && result_1 === 6) {
            dispatch(set_win_type('yams'));
            current_result.yams++;
          } else if (result_1 === result_2 && result_1 === result_3 && result_1 !== 6) {
            dispatch(set_win_type('brelan'));
            current_result.brelan++;
          } else if (result_1 !== result_2 && result_1 !== result_3 && result_2 !== result_3 && somme === 6) {
            dispatch(set_win_type('petite_suite'));
            current_result.petite_suite++;
          } else if (result_1 !== result_2 && result_1 !== result_3 && result_2 !== result_3 && somme === 15) {
            dispatch(set_win_type('grande_suite'));
            current_result.grande_suite++;
          }
        }
        dispatch(set_total());
      }
      const total_wins = current_result.yams + current_result.brelan + current_result.petite_suite + current_result.grande_suite;
      console.log(current_result);
      dispatch(set_current(current_result));
      dispatch(yams(current.yams));
      dispatch(brelan(current.brelan));
      dispatch(petite_suite(current.petite_suite));
      dispatch(grande_suite(current.grande_suite));
      dispatch(play());

    }
  }, [launch]);


  return (
    <Card >
      <h1>Lancer une série</h1>
      {/* <p>{win_types.yams}</p>
          <p>{win_types.brelan}</p>
          <p>{win_types.petite_suite}</p>
          <p>{win_types.grande_suite}</p>
          <h1>{total}</h1> */}
      <div>
        <label htmlFor="number">Choisir le nombre de parties :</label>
        <Input type="number" onChange={(e) => dispatch(set_number(e.target.value))} />
      </div>
      <Button onClick={() => dispatch(play())} > Lancer les dés </Button>
    </Card>
  );
}

export default Game;