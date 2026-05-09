import { useState, useMemo, useCallback } from "react";
const MemoCallbackComp = () => {
    let [name, setName] = useState('');

    let changeName = (event) => {
        console.log('Change function')
        setName(event.target.value)
    }

    let momeFun = (param) => {
        console.log('Memo Function')
        setName(param)
        return name;
    }
    let memoRef = useMemo( () => momeFun(name), [name]);

    let callbackFun = useCallback( (param) => {
        console.log('callback function')
        return name
    }, [name])
    return(
        <>
            <h2>Memo Callback Hook</h2>
            <input type='text' onBlur={ (e) => changeName(e) }></input>
            <strong>{name}--{memoRef}--{callbackFun(name)}</strong>
        </>
    )
}
export default MemoCallbackComp;