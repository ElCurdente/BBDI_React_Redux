import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play, set_dice } from './store/actions/actions-types';

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
    <div className="App">
      {/* <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      <button onClick={() => dispatch(set_message(Math.random().toString()))} > ADD ALEA MESSAGE </button> */}
      <input type="number" placeholder="Choisir le nombre de parties" onChange={(e) => dispatch(set_number(e.target.value))} />
      <button onClick={() => dispatch(play())} > Lancer les dés </button>

    </div>
  );
}

export default Home;
