import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class PostComponent extends React.Component{
    
    render(){
        return (
            <div className="card w-100 mt-3">
                <div className="card-body">
                    <h5 className="card-title">Post it</h5>
                    <div>
                        <div className="radioGroup">   
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Mu
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Ga
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Bo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                            Mo
                                </label>
                            </div>
                        </div>
                        <div className="mx-auto radioGroup float-xl-right">
                            <a href="#" className="btn btn-primary">pull</a>
                            <a href="#" className="btn btn-primary">video</a>
                            <a href="#" className="btn btn-primary">photo/video</a>
                            <a href="#" className="btn btn-primary">review</a>
                            <a href="#" className="btn btn-primary media-button" >img</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostComponent;