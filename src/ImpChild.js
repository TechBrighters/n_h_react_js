import { forwardRef, useImperativeHandle } from "react";

const ImpChild = forwardRef((props,ref) => {
    console.log(props)
    console.log(ref)
    useImperativeHandle(ref,() => ({
        changeName(event){
            console.log(event.target.value)
        },
        clickBtn(e){
            console.log('Clicked')
        }
    }))
    return(
        <>
            <h2>Impt Child</h2>
        </>
    )
})
export default ImpChild;