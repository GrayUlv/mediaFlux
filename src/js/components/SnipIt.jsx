import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class SnipIt extends React.Component{
    // constructor(){
    //     super();
    //     this.state={"task":[]};
    // }
    // handleClickNewTask(e){
    //     if(){
    //         let tempState = this.state;
    //         tempState.task.push();
    //         this.setState(tempState);
           
    //     }
    // }
    // creatLi((this.props.con1) ? this.props.con1 : "no info"){
    //         return(
    //             <li className="list-group-item">{(this.props.con1) ? this.props.con1 : "no info"}</li>
    //             );
    // }
    render(){
        // var listTasks= this.state.task.map(this.creatLi.bind(this));
        return (
            <ul className="list-group list-group-flush">
                 <li className="list-group-item">{(this.props.con1) ? this.props.con1 : "no info"}</li>
            </ul>
                
        );
    }
}

export default SnipIt;