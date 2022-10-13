import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_number, play } from './store/actions/actions-types';

function Home() {

  debugger;

  // lecture du store de la source de vérité read-only
  const { messages } = useSelector(state => state.message);
  // const { number, launch, dices, win_types, result } = useSelector(state => state.y);



  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('play lancé :' + launch);
  // }, [launch]);

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
