import { useState } from "react";

const StateComp = () => {
    console.log(useState(''))
    let [phone, setPhone] = useState('N/A')
    let [status,setStatus] = useState(true);
    console.log('phone',phone)

    let changePhone = (event) => {
        setPhone(event.target.value)
        setStatus(!status)
    }
    return(
        <>
            <h2>useState Hook</h2>
            <input onBlur={ (e) => changePhone(e) }></input>
            <b>{phone}---{ status ? 'Active' : 'Inactive'}</b>
        </>
    )
}
export default StateComp;