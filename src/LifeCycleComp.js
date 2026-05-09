import { React, Component } from 'react';

class LifeCycleComp extends Component{
    constructor(){
        super();
        console.log('Constructor Calling')
        this.state = {
            name:'Test'
        }
    }

    static getDerivedStateFromProps(props, state){//paramter not mandatory, but 2 parameter there props,state
        console.log('Derived State from Props')
        console.log('state',state)
        console.log('props',props)
        return state
    } 

    componentDidMount(){
        console.log('Did Mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot){ //parameter not required, 3 param, prevProps, prevState, snapshot
        console.log('Did update')    
        console.log('prevState',prevState)
        console.log('prevProps',prevProps)
        console.log('snap',snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){//param not requires, 2 para, prevProps, prevState
        console.log('Snapshot before Update')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        return 500;
    }

    shouldComponentUpdate(nextProps, nextState){ //param not requires, 2 param, nextprops, nextstate
        console.log('Should Update')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        if(nextState.name == 'admin'){
            return true
        }else{
            return false;
        }
    }

    componentWillUnmount(){
        console.log('Unmount')
    }

    changeName(e){
        this.setState({ name : e.target.value})
    }
    render(){
        return(
            <>
                <h2>Life Cycle Component</h2>
                <input type='text' onBlur={ (e) => this.changeName(e)}></input>
                <strong>{this.state.name}</strong>
            </>
        )
    }
}

export default LifeCycleComp;