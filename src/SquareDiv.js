import React from "react";

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn: true
        }
    }
    
    getIsOn(){
        let currentState= this.state.isOn;
        let pastState= currentState;
        if(currentState===false){
           currentState=true; 
        }
        else {
            currentState =false;
        }
        
        return pastState;
    }
    
    render(){
        return <div onClick={getIsOn} class="square">this.state.isOn</div>
    }
}

export default Square;