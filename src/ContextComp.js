import { createContext, useState } from "react";
import ContextChild from "./ContextChild";
export let GlobalContext = createContext();
const ContextComp = () => {
    let email = 'test@test.com';
    let id = 50;
    let [name, setName] = useState('Test');
    return(
        <>
            <h2>Context Comp</h2>
            <GlobalContext.Provider value={{ email, name, setName, id}}>
                <ContextChild></ContextChild>
            </GlobalContext.Provider>
        </>
    )
}
export default ContextComp;