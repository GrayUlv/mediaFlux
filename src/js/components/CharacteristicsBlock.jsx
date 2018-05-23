import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CheckBox extends React.Component{
    
    render(){
        return (
            <div className="bg-dark text-white">
                <div className="location pl-1">
                    <h5>Destence</h5>
                    <div className="pl-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                50 mil
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />  
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                100 mil
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                200 mil
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                500 mil
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                world wide
                            </label>
                        </div>
                    </div>
                </div>
                <div className="gender pl-1">
                    <h5>Gender</h5>
                    <div className="pl-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Male
                            </label>
                        </div>    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Fimale
                            </label>
                        </div>
                    </div>
                </div>
                <div className="intrest pl-1">
                    <h5>Intresets</h5>
                    <div className="pl-4">
                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Music
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Video Games
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Books
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Movies
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CheckBox;