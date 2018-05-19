import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class SnipIt extends React.Component{

    render(){
        
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{(this.props.con1) ? this.props.con1 : "no info"}</li>
            </ul>
                
        );
    }
}

export default SnipIt;