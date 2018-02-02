import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chip from 'material-ui/Chip';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';

import ReorderProducts from './ReorderProducts';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: '',
            pages:'',
            message: '',
        };

        this.handleAddProduct = this.handleAddProduct.bind(this);
    };

    componentDidMount(){
        axios.get('http://localhost:8000/all-products')
        .then(response => {
            this.setState({ products: response.data });
        })
        .catch(function (error) {
           console.log(error);
        })

        axios.get('http://localhost:8000/all-product-pages')
        .then(response => {
            this.setState({ pages: response.data });
        })
        .catch(function (error) {
           console.log(error);
        })
    }

    handleAddProduct(){
        this.setState({
            message: 'To add a product, first add a product page.',
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
                              {this.state.products.length} Products
                            </Chip>
                        </div>
                    </div>
                    <div className="col-xs-6 text-right tablet-header-fix" style={{ marginBottom:'15px' }}>
                        {this.state.pages.length === 0 &&
                            <div>
                                <FlatButton className="button-bg" onClick={this.handleAddProduct} label="Add Product" />
                            </div>
                        }
                        {this.state.pages.length > 0 &&
                            <Link to="/products/add-product">
                                <FlatButton className="button-bg" label="Add Product" />
                            </Link>
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="app-preview-desktop tablet-gone">App preview here</div>
                    </div>
                    <div className="col-md-8 tablet-pages-fix">
                        <ReorderProducts />
                        {this.state.message !== '' &&
                            <h4 style={{ marginTop:'75px' }}>{this.state.message}</h4>
                        }
                    </div>
               </div>
            </div>
        );
    }
}
