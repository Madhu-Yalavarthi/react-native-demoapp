import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';


const reducers = {
    form:formReducer
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;