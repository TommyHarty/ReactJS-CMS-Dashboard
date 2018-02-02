import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

export default class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages:'',
            page:'',
            status: true,
            auth_id:'',
            featured_image:'',
            title:'',
            short_description:'',
            description:'',
            price:'',
            regular_price:'',
            sku:'',
            additional_shipping:'',
        };

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleShortDescriptionChange = this.handleShortDescriptionChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleRegularPriceChange = this.handleRegularPriceChange.bind(this);
        this.handleSkuChange = this.handleSkuChange.bind(this);
        this.handleShippingChange = this.handleShippingChange.bind(this);
        this.handleFeatImageChange = this.handleFeatImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    };

    componentDidMount(){
        axios.get('http://localhost:8000/all-product-pages')
        .then(response => {
            this.setState({ pages: response.data, page:response.data[0].id });
        })
        .catch(function (error) {
           console.log(error);
        })

        axios.get('http://localhost:8000/auth-id-api')
        .then(response => {
            this.setState({ auth_id: response.data });
        })
        .catch(function (error) {
           console.log(error);
        })
    }

    select(){
        if(this.state.pages instanceof Array){
            return this.state.pages.map(function(object){
                return <MenuItem value={object.id} primaryText={object.title} key={object.id} />
            })
        }
    }

    handleSubmit(){
        const data = {
            page: this.state.page,
            status: this.state.status,
            title:this.state.title,
            featured_image:this.state.featured_image,
            short_description:this.state.short_description,
            description:this.state.description,
            price:this.state.price,
            regular_price:this.state.regular_price,
            sku:this.state.sku,
            additional_shipping:this.state.additional_shipping,
        }
        let uri = 'http://localhost:8000/store-product';
        axios.post(uri, data).then((response) => {
            browserHistory.push('/products');
        });
    }

    handleFeatImageChange(file) {
        const data = new FormData()
        data.append('featured_image', file[0]);
        let uri = 'http://localhost:8000/store-image';
        axios.post(uri, data).then((response) => {
            this.setState({featured_image: "http://localhost:8000/uploads/" + this.state.auth_id + "/" + file[0].name});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handlePageChange(event, index, page) {
        this.setState({page: page});
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleShortDescriptionChange(event) {
        this.setState({short_description: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value});
    }

    handleRegularPriceChange(event) {
        this.setState({regular_price: event.target.value});
    }

    handleSkuChange(event) {
        this.setState({sku: event.target.value});
    }

    handleShippingChange(event) {
        this.setState({additional_shipping: event.target.value});
    }

    changeStatus() {
        this.setState({status: !this.state.status});
    }

    render() {
        const contentStyle = { padding:'20px', marginLeft:'240px' };
        const customCard = { backgroundColor:'#ffffff',
                             padding:'30px',
                             paddingTop:'9px',
                             marginTop:'15px',
                             borderRadius:'4px',
                             border: '1px solid #ddd',
                             // boxShadow: '0 7px 14px 0 rgba(50, 50, 93, 0.035), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
                           };

        return (
            <div className="row" style={contentStyle}>
                <div className="col-md-4">
                    <div className="above-app-preview-desktop">
                        <Link to="/products"><FontIcon color={'#1fc8db'} className="material-icons">arrow_back</FontIcon>
                        <span style={{ fontSize:'18px', color:'#1fc8db', position:'relative', bottom:'5px', marginLeft:'4px' }}>Products</span></Link>
                    </div>
                    <div className="app-preview-desktop tablet-gone">App preview here</div>
                </div>
                <div className="col-md-8">
                    <div className="text-right">
                        <Link to="/products"><FlatButton label="Cancel" backgroundColor="#ebebeb" style={{ marginRight:'15px', marginLeft:'15px' }} /></Link>
                        <FlatButton onClick={this.handleSubmit} className="button-bg" label="Save Product" />
                        <div className="col-md-8">
                        </div>
                        <div className="col-md-4">
                            <Toggle
                                label="Live"
                                defaultToggled={this.state.status}
                                onClick={this.changeStatus}
                                style={{ position:'relative', top:'10px' }}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12" style={customCard}>
                        <div className="row">
                            <div className="col-xs-6">
                                <TextField
                                    hintText="Product Title"
                                    floatingLabelText="Product Title"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.title}
                                    onChange={this.handleTitleChange}
                                />
                            </div>

                            <div className="col-xs-6">
                              <SelectField
                                  floatingLabelText="Product Page"
                                  fullWidth={true}
                                  underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                  floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                  selectedMenuItemStyle={{ color:'#1fc8db' }}
                                  value={this.state.page}
                                  onChange={this.handlePageChange}
                              >
                                  {this.select()}
                              </SelectField>
                            </div>

                            <div className="col-xs-12">
                                <TextField
                                    hintText="Product Short Description"
                                    floatingLabelText="Product Short Description"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.short_description}
                                    onChange={this.handleShortDescriptionChange}
                                />
                            </div>

                            <div className="col-xs-12">
                                <TextField
                                    hintText="Product Description"
                                    floatingLabelText="Product Description"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    multiLine={true}
                                    rows={1}
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange}
                                />
                            </div>

                            <div className="col-xs-6">
                                <TextField
                                    hintText="Product Price"
                                    floatingLabelText="Product Price"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.price}
                                    onChange={this.handlePriceChange}
                                />
                            </div>

                            <div className="col-xs-6">
                                <TextField
                                    hintText="Regular Price"
                                    floatingLabelText="Regular Price"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.regular_price}
                                    onChange={this.handleRegularPriceChange}
                                />
                            </div>

                            <div className="col-xs-6">
                                <TextField
                                    hintText="Product Sku"
                                    floatingLabelText="Product Sku"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.sku}
                                    onChange={this.handleSkuChange}
                                />
                            </div>

                            <div className="col-xs-6">
                                <TextField
                                    hintText="Additional Shipping"
                                    floatingLabelText="Additional Shipping"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.additional_shipping}
                                    onChange={this.handleShippingChange}
                                />
                            </div>

                            <div className="col-xs-12" style={{ marginTop:'15px' }}>
                                {this.state.featured_image === '' &&
                                    <FlatButton
                                        label="Add Featured Image"
                                        className="button-bg"
                                        style={{ marginBottom:'-7px' }}
                                        labelPosition="before"
                                        containerElement="label"
                                        primary={true}
                                    >
                                        <input onChange={(e) => this.handleFeatImageChange(e.target.files)} type="file" style={{ cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0, }} />
                                    </FlatButton>
                                }
                                {this.state.featured_image !== '' &&
                                    <div>
                                    <FlatButton
                                        label="Change Featured Image"
                                        className="button-bg"
                                        style={{ marginBottom:'-7px' }}
                                        labelPosition="before"
                                        containerElement="label"
                                        primary={true}
                                    >
                                        <input onChange={(e) => this.handleFeatImageChange(e.target.files)} type="file" style={{ cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0, }} />
                                    </FlatButton>
                                    <img style={{ width:'205px', display:'block' }} src={this.state.featured_image} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}
