import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play, set_dice, set_win_type, set_total } from './store/actions/actions-types';

function Home() {


  // lecture du store de la source de vérité read-only
  // const { messages } = useSelector(state => state.message);
  const { number, launch, total, dices, win_types, result } = useSelector(state => state.yam);

  const verif = ['666', '555', '444', '333', '222', '111', '123', '213', '231', '132', '312', '321', '456', '546', '564', '465', '645', '654'];


// actions dispatch dans le reducer => newState 
const dispatch = useDispatch();

useEffect(() => {
  console.log('play lancé :' + launch);
  if (launch) {
    console.log(number);
    for (let i = 0; i < number; i++) {
      const result_1 = Math.floor(Math.random() * 6) + 1;
      const result_2 = Math.floor(Math.random() * 6) + 1;
      const result_3 = Math.floor(Math.random() * 6) + 1;
      const somme = result_1 + result_2 + result_3;

      dispatch(set_dice(result_1, result_2, result_3));
      console.log(result_1 + '' + result_2 + '' + result_3);
      console.log(verif.indexOf(result_1 + '' + result_2 + '' + result_3));

      if (verif.indexOf(result_1 + '' + result_2 + '' + result_3) !== -1) {
        if (result_1 === result_2 && result_1 === result_3 && result_1 === 6) {
          console.log('yams');
          dispatch(set_win_type('yams'));
        } else if (result_1 === result_2 && result_1 === result_3 && result_1 !== 6) {
          console.log('brelan');
          dispatch(set_win_type('brelan'));
        } else if (result_1 !== result_2 && result_1 !== result_3 && result_2 !== result_3 && somme === 6) {
          console.log('petite suite');
          dispatch(set_win_type('petite_suite'));
        } else if (result_1 !== result_2 && result_1 !== result_3 && result_2 !== result_3 && somme === 15) {
          console.log('grande suite');
          dispatch(set_win_type('grande_suite'));
        }
      }
      dispatch(set_total());
    }
    console.log(dices);
  }

  // console.log(win_types.yams);
  // console.log(win_types.brelan);
  // console.log(win_types.petite_suite);
  // console.log(win_types.grande_suite);
}, [launch]);

return (
  <div className="App">
    {/* <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      <button onClick={() => dispatch(set_message(Math.random().toString()))} > ADD ALEA MESSAGE </button> */}
      <p>{win_types.yams}</p>
      <p>{win_types.brelan}</p>
      <p>{win_types.petite_suite}</p>
      <p>{win_types.grande_suite}</p>
      <h1>{total}</h1>
    <input type="number" placeholder="Choisir le nombre de parties" onChange={(e) => dispatch(set_number(e.target.value))} />
    <button onClick={() => dispatch(play())} > Lancer les dés </button>

  </div>
);
}

export default Home;
