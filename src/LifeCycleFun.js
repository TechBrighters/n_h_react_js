import LifeCycleComp from "./LifeCycleComp";
import { React, Component } from 'react';
class LifeCycleFun extends Component{
    constructor(){
        super()
        this.state = {
            status : true
        }
    }
    changeState = () => {
       this.setState({
        status : !this.state.status
       })
    }
    render(){
        return(
            <>
                { this.state.status ? <LifeCycleComp id="30" phone="33444"></LifeCycleComp> : '' }
                <button onClick={ (e) => this.changeState(e) }>Change</button>
            </>
        )
    }
}
export default LifeCycleFun