import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import ButtonComponent from '../components/ButtonComponent.jsx';
import NavComponent from '../components/NavCom.jsx';
// import MediaSelectorComp from '../components/MediaSelCom.jsx';
// import PostComponent from '../components/PostCom.jsx';
// import CardComponent from '../components/CardCom.jsx';
import RightSideBar from '../components/RightSideBar.jsx';
import LeftSideBar from '../components/LeftSideBar.jsx';
import CenterView  from '../components/CenterView.jsx';
export default class Home extends Flux.View {
  render() {
    return (
        <div>
            <NavComponent/>
            <div className="row">
                <div className="col-lg-3">
                    <LeftSideBar selector="chat"/>
                </div>
                <div className="col-lg-6">
                    <CenterView/>
                </div>
                <div className="col-lg-3">
                    <RightSideBar/>
                </div>
            </div>
        </div>
    );
  }
}
