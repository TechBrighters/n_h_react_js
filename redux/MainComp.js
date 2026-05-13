import Cart from "./Cart";
import { connect } from 'react-redux';
// const MainComp = () => {
//     return(
//         <>
//             <h2>Main Component Redux</h2>
//             <Cart></Cart>
//         </>
//     )
// }

let AddToCart = (data) => {
    console.log('Add To Cart Calling')
    return {data:data, type:'ADD_TO_CART'}
}

let cartInfo = state => ({
    cart_data : state.addToCartKey
})

let addCart = dispatch => ({
    add_to_cart : data => dispatch(AddToCart(data)),
})

export default connect(cartInfo, addCart)(Cart);