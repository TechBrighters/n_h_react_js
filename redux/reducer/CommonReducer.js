import AddToCartAction from "./CartReducer";
import { combineReducers } from 'redux';

export default combineReducers({
    addToCartKey : AddToCartAction,
})
