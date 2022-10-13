import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message } from './store/actions/actions-types';

function Statistiques() {
  // lecture du store de la source de vérité read-only
  const { messages, count } = useSelector(state => state.message);

  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>ANTOINE CE MAXI BG</p>
    </div>
  );
}

export default Statistiques;