import { GlobalContext } from "./ContextComp";
import { useContext } from "react";

const ContextChild = (props) => {
    let { email, name, id } = useContext(GlobalContext);
    return(
        <>
            <h2>Context Child</h2>
            <b>{id}---{email}</b>
        </>
    )
}
export default ContextChild;