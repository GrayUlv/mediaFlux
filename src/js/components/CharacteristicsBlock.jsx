import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CheckBox extends React.Component{
    
    render(){
        return (
            <div>
                <div className="location">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            50 mil
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            100 mil
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            200 mil
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            500 mil
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            world wide
                        </label>
                    </div>
                </div>
                <div className="gender">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Male
                        </label>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Fimale
                        </label>
                    </div>
                    </div>
                </div>
                <div className="intrest">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Music
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Video Games
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Books
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Movies
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckBox;