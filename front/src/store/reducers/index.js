import { combineReducers } from 'redux';
// reducers 
import reducerMessage from './message';
import reducerYam from './yam';

export default combineReducers({
    y : reducerYam,
});