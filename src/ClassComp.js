import { React, Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.email = 'test@gmail.com'
        this.state = {
            subject : 'Maths',
            total : 0,
            rollNo : 30
        }
    }

    changeSubject = (event) => {
        console.log('Here',event)
        this.setState({
            subject : event.target.value
        })
    }
    render(){
        return(
            <>
                <h2>Class Component</h2>
                <strong>{this.props.name}---{this.props.id}---{this.email}</strong>
                <input onBlur={(e) => this.changeSubject(e)}></input>
                <b>{this.state.subject}</b>
            </>
        )
    }
}
export default ClassComp;