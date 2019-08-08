import { createStore } from 'redux';
import loginReducer from '../reducers/LoginReducer';

export default (store = createStore(loginReducer));
