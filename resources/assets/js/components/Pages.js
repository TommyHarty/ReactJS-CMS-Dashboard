import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';

import ReorderPages from './ReorderPages';

export default class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            auth_id:'',
        };
    };

    componentDidMount(){
        axios.get('http://localhost:8000/all-pages')
        .then(response => {
            this.setState({ pages: response.data });
        })
        .catch(function (error) {
           console.log(error);
        })
    }

    render() {
        const contentStyle = {  padding:'20px', marginLeft:'256px' };

        return (
            <div style={contentStyle}>
                <div className="row">
                    <div className="col-xs-6" style={{ fontSize:'18px' }}>
                        <div className="above-app-preview-desktop">
                            <Chip style={{ backgroundColor:'#ebebeb' }}>
                              {this.state.pages.length} Pages
                            </Chip>
                        </div>
                    </div>
                    <div className="col-xs-6 text-right tablet-header-fix" style={{ marginBottom:'15px' }}>
                        <Link to="/pages/add-page">
                            <FlatButton className="button-bg" label="Add Page" />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="app-preview-desktop tablet-gone">App preview here</div>
                    </div>
                    <div className="col-md-8 tablet-pages-fix">
                        <ReorderPages />
                    </div>
               </div>
            </div>
        );
    }
}
