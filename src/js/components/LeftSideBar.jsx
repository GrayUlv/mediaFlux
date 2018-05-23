import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ChatComponent from './ChatComp.jsx';
import CheckBox from './CharacteristicsBlock.jsx';
class LeftSideBar extends React.Component{
    
    render(){
        let des;
        if (this.props.selector==="chat"){
            return des=<ChatComponent/>;
        }
        if(this.props.selector==="checkbox"){
            return des= <CheckBox/>;
        }
        return (
            <div className="text-white bg-dark">
                {des}
            </div>   
                        
        );
    }
}

export default LeftSideBar;