import { useEffect, useState, useLayoutEffect } from "react";

const EffectComp = () => {
    let [name,setName] = useState('N/A')
    let [count, setCount] = useState(0);
    useEffect( () => {
        console.log('Effect Calling')
        // let sds = fetch('sdsddd')
        // sds.then( (res) => {

        // }).catch()
    },[count])

    useEffect( () => {
        console.log('Name Effect')
    },[name])
    
    useLayoutEffect( () => {
        console.log('Layout Effect')
    },[count]);

    let changeName = (event) => {
        setName(event.target.value)
    }

    let increaseCount = () => {
        setCount(count + 1)
    }
    return(
        <>
            <h2>useEffect Comp</h2>
            <input onBlur={ (e) => changeName(e) }></input>
            <b>{name}</b>
            <button onClick={ () => increaseCount() }>Count</button>
            <strong>{count}</strong>
        </>
    )
}
export default EffectComp;