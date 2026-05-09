import { useReducer } from "react";

let reducerFun = (state,action) => {
    console.log('Reducer Fun')
    console.log('state',state)
    console.log('action',action)
    switch(action.type){
        case 'NAME':
            return {name:'Nisha',email:state.email}
            break
        case 'EMAIL':
            return {name:state.name,email:'nish@gmail.com'}
            break;
        default:
            return state;
    }
}

const ReducerComp = () => {

    let [state, dispatch] = useReducer(reducerFun,{name:'Test',email:'test@gmail.com'});
    return(
        <>
            <h2>useReducer Hook</h2>
            <button onClick={ () => {
                dispatch({type:'NAME'})
                dispatch({type:'EMAIL'})
            }}>Click Me</button>
            <b>{state.name}---{state.email}</b>
        </>
    )
}

export default ReducerComp;