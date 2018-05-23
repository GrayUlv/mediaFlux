import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatComponent from './ChatComp.jsx';

class RightSideBar extends React.Component{
    
    render(){
        return (
            <div className="text-white bg-dark">
                <ChatComponent/>
            </div>    
                        
        );
    }
}

export default RightSideBar;