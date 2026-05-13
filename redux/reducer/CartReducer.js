
const AddToCartAction = (state=[], action) => {
    console.log('Cart Reducer Calling', state)
    console.log('Cart Reducer Calling action', action)
    switch(action.type){
        case 'ADD_TO_CART':
            return[...state, {data:action.data}]
            break;
        default:
            return state;
            break;
    }
}
export default AddToCartAction;