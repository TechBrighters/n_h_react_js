const Cart = (props) => {
    console.log(props)
    return(
        <>
            <h2>Cart Action</h2>
            <strong>Samasung Galaxy</strong><br/>
            <b>Price : 40000</b><br/>
            <button onClick={ () => props.add_to_cart({name:'Samsung Galaxy',price:40000})}>Add To Cart</button>

            <strong>Dell Laptop</strong><br/>
            <b>Price : 55000</b><br/>
            <button onClick={ () => props.add_to_cart({name:'Dell Laptop',price:55000})}>Add To Cart</button>
            <strong>My Cart : {props.cart_data.length}</strong>
        </>
    )
}
export default Cart;