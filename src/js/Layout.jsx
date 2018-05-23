import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import Product from "./views/Product.jsx";
import Profile from "./views/Profile.jsx";
import FriendSelecter from "./views/FriendSelecter.jsx";
export default class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/product/:id" component={Product} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/friend" component={FriendSelecter} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
