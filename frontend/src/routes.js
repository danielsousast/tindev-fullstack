import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}/>
            <Route path="/home/:id" component={Home}/>
        </BrowserRouter>
    )
}