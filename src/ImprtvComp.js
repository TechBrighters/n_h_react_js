import { useRef } from "react";
import ImpChild from "./ImpChild";

const ImprtvComp = () => {
    let testRef = useRef(null);
    return(
        <>
            <h2>useImperativeHandle Hook</h2>
            <input type='text' placeholder="Enter" onBlur={ (e) => testRef.current.changeName(e) } ></input>
            <button onClick={ (e) => testRef.current.clickBtn(e)}>Click ME</button>
            <ImpChild ref={testRef} name="test" id="40"></ImpChild>
        </>
    )
}
export default ImprtvComp;