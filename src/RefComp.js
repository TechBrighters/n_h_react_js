import { useRef } from "react";

const RefComp = () => {
    let fieldRef = useRef('Test');
    console.log(fieldRef.current)

    let changeName = (event) => {
        fieldRef.current = event.target.value
        console.log(fieldRef.current)
    }
    return(
        <>
            <h2>useRef Hook</h2>
            <input type='text' ref={fieldRef} placeholder="Enter" onBlur={ (e) => changeName(e) }></input>
        </>
    )
}
export default RefComp;