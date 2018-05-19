import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MediaSelectorComp extends React.Component{
    
    render(){
        return (
            <div className="topA">
                <div className="mx-auto btn-group btn-group-toggle align-items-center" align="center" data-toggle="buttons">
                    <label className="btn btn-secondary active ">
                        <input type="radio" name="options" id="option1" autoComplete="off" checked/> Mu
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" autoComplete="off"/> Ga
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option3" autoComplete="off"/>Bo
                    </label>
                    <label className="btn btn-secondary ">
                        <input type="radio" name="options" id="option4" autoComplete="off"/> Mo
                    </label>
                </div>
            </div>
                        
        );
    }
}

export default MediaSelectorComp;