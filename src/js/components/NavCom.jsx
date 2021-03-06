import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavComponent extends React.Component{
    
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <Link to="/home" className="navbar-brand text-white">MediaFlux</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/profile" className="nav-link text-white">profile<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/friend" className="nav-link text-white">Friend Selector</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 text-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}
// ButtonComponent.propTypes = {
//   className: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
//   color: PropTypes.string
// };
// ButtonComponent.defaultProps = {
//   className: '',
//   color: 'light'
// };
export default NavComponent;