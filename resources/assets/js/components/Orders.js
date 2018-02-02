import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class Orders extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const contentStyle = { paddingLeft:'20px', marginLeft:'256px' };

        return (
            <div style={contentStyle}>
                <h1>Orders here</h1>
            </div>
        );
    }
}
