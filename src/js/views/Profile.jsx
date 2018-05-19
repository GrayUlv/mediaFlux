import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
export default class Profile extends Flux.View {
render() {
    return (
        <div>
            <NavComponent/>
            <div className="row">
                <div className="col-lg-2">
                    <LeftSideBar/>
                </div>
                <div className="col-lg-8">
                    <CenterView/>
                </div>
                <div className="col-lg-2">""
                    hjgkljh
                </div>
            </div>
        </div>
    );
  }
}