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

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            auth_id:'',
            status: true,
            title:'',
            type:'Basic',
            featured_image:'',
            content:'',
            above_content:'',
            below_content:'',
            business_name:'',
            business_tagline:'',
            business_description:'',
            business_email:'',
            business_phone:'',
            business_street_1:'',
            business_street_2:'',
            business_city:'',
            business_county:'',
            business_country:'',
            business_postcode:'',
            products:''
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAboveChange = this.handleAboveChange.bind(this);
        this.handleBelowChange = this.handleBelowChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleBusNameChange = this.handleBusNameChange.bind(this);
        this.handleBusTaglineChange = this.handleBusTaglineChange.bind(this);
        this.handleBusDescriptionChange = this.handleBusDescriptionChange.bind(this);
        this.handleBusEmailChange = this.handleBusEmailChange.bind(this);
        this.handleBusPhoneChange = this.handleBusPhoneChange.bind(this);
        this.handleStreet1Change = this.handleStreet1Change.bind(this);
        this.handleStreet2Change = this.handleStreet2Change.bind(this);
        this.handleBusCityChange = this.handleBusCityChange.bind(this);
        this.handleBusCountyChange = this.handleBusCountyChange.bind(this);
        this.handleBusCountryChange = this.handleBusCountryChange.bind(this);
        this.handleBusPostcodeChange = this.handleBusPostcodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDuplicate = this.handleDuplicate.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    };

    componentDidMount(){
        axios.get('http://localhost:8000/auth-id-api')
        .then(response => {
            this.setState({ auth_id: response.data });
        })
        .catch(function (error) {
           console.log(error);
        })

        axios.get(`http://localhost:8000/edit-page-api/${this.props.params.id}`)
        .then(response => {
            console.log(response.data.featured_image)
            this.setState({
                id:response.data.id,
                status: response.data.status,
                title:response.data.title,
                type:response.data.type,
                featured_image:response.data.featured_image,
                content:response.data.content,
                above_content:response.data.above_content,
                below_content:response.data.below_content,
                business_name:response.data.business_name,
                business_tagline:response.data.business_tagline,
                business_description:response.data.business_description,
                business_email:response.data.business_email,
                business_phone:response.data.business_phone,
                business_street_1:response.data.business_street_1,
                business_street_2:response.data.business_street_2,
                business_city:response.data.business_city,
                business_county:response.data.business_county,
                business_country:response.data.business_country,
                business_postcode:response.data.business_postcode,
                products:response.data.products,
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleSubmit(){
        const data = {
            status: this.state.status,
            title:this.state.title,
            type:this.state.type,
            content:this.state.content,
            above_content:this.state.above_content,
            below_content:this.state.below_content,
            featured_image:this.state.featured_image,
            business_name:this.state.business_name,
            business_tagline:this.state.business_tagline,
            business_description:this.state.business_description,
            business_email:this.state.business_email,
            business_phone:this.state.business_phone,
            business_street_1:this.state.business_street_1,
            business_street_2:this.state.business_street_2,
            business_city:this.state.business_city,
            business_county:this.state.business_county,
            business_country:this.state.business_country,
            business_postcode:this.state.business_postcode
        }
        let uri = 'http://localhost:8000/update-page/'+this.props.params.id;
        axios.patch(uri, data).then((response) => {
            browserHistory.push('/pages');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    handleDelete(object) {
        let uri = `http://localhost:8000/delete-page/${this.state.id}`;
        axios.delete(uri);
            browserHistory.push('/pages');
    }

    handleDuplicate(){
        const data = {
            status: this.state.status,
            title:this.state.title,
            type:this.state.type,
            featured_image:this.state.featured_image,
            content:this.state.content,
            above_content:this.state.above_content,
            below_content:this.state.below_content,
            featured_image:this.state.featured_image,
        }
        let uri = 'http://localhost:8000/store-page';
        axios.post(uri, data).then((response) => {
            browserHistory.push('/pages');
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

    handleTypeChange(event, index, type) {
        this.setState({type: type});
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleAboveChange(event) {
        this.setState({above_content: event.target.value});
    }

    handleBelowChange(event) {
        this.setState({below_content: event.target.value});
    }

    handleContentChange(event) {
        this.setState({content: event.target.value});
    }

    handleBusNameChange(event) {
        this.setState({business_name: event.target.value});
    }

    handleBusTaglineChange(event) {
        this.setState({business_tagline: event.target.value});
    }

    handleBusDescriptionChange(event) {
        this.setState({business_description: event.target.value});
    }

    handleBusEmailChange(event) {
        this.setState({business_email: event.target.value});
    }

    handleBusPhoneChange(event) {
        this.setState({business_phone: event.target.value});
    }

    handleStreet1Change(event) {
        this.setState({business_street_1: event.target.value});
    }

    handleStreet2Change(event) {
        this.setState({business_street_2: event.target.value});
    }

    handleBusCityChange(event) {
        this.setState({business_city: event.target.value});
    }

    handleBusCountyChange(event) {
        this.setState({business_county: event.target.value});
    }

    handleBusCountryChange(event) {
        this.setState({business_country: event.target.value});
    }

    handleBusPostcodeChange(event) {
        this.setState({business_postcode: event.target.value});
    }

    changeStatus() {
        this.setState({status: !this.state.status});
    }

    formFields(){
        if(this.state.type === 'Products'){
            return <div>
                <div className="col-xs-12">
                    <TextField
                        hintText="Text Above Content"
                        floatingLabelText="Text Above Content"
                        fullWidth={true}
                        underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                        floatingLabelFocusStyle={{ color:'#1fc8db' }}
                        multiLine={true}
                        rows={1}
                        value={this.state.above_content}
                        onChange={this.handleAboveChange}
                    />
                    <small style={{ position:'relative', bottom:'7px' }}>This will be visible above your {this.state.type}</small>
                </div>
                <div className="col-xs-12">
                    <TextField
                        hintText="Text Below Content"
                        floatingLabelText="Text Below Content"
                        fullWidth={true}
                        underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                        floatingLabelFocusStyle={{ color:'#1fc8db' }}
                        multiLine={true}
                        rows={1}
                        value={this.state.below_content}
                        onChange={this.handleBelowChange}
                    />
                    <small style={{ position:'relative', bottom:'7px' }}>This will be visible below your {this.state.type}</small>
                </div>
            </div>
        } else if(this.state.type === 'Basic'){
            return <div className="col-xs-12">
                <TextField
                    hintText="Page Content"
                    floatingLabelText="Page Content"
                    fullWidth={true}
                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                    multiLine={true}
                    rows={1}
                    value={this.state.content}
                    onChange={this.handleContentChange}
                />
            </div>
        } else if(this.state.type === 'Business Information'){
            return <div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Business Name"
                               floatingLabelText="Business Name"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_name}
                               onChange={this.handleBusNameChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Business Tagline"
                               floatingLabelText="Business Tagline"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_tagline}
                               onChange={this.handleBusTaglineChange}
                           />
                       </div>
                       <div className="col-xs-12">
                           <TextField
                               hintText="Business Description"
                               floatingLabelText="Business Description"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               multiLine={true}
                               rows={1}
                               value={this.state.business_description}
                               onChange={this.handleBusDescriptionChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Business Email"
                               floatingLabelText="Business Email"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_email}
                               onChange={this.handleBusEmailChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Business Phone"
                               floatingLabelText="Business Phone"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_phone}
                               onChange={this.handleBusPhoneChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Street 1"
                               floatingLabelText="Street 1"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_street_1}
                               onChange={this.handleStreet1Change}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Street 2"
                               floatingLabelText="Street 2"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_street_2}
                               onChange={this.handleStreet2Change}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="City"
                               floatingLabelText="City"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_city}
                               onChange={this.handleBusCityChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="County"
                               floatingLabelText="County"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_county}
                               onChange={this.handleBusCountyChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Country"
                               floatingLabelText="Country"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_country}
                               onChange={this.handleBusCountryChange}
                           />
                       </div>
                       <div className="col-xs-6">
                           <TextField
                               hintText="Postcode"
                               floatingLabelText="Postcode"
                               fullWidth={true}
                               underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                               floatingLabelFocusStyle={{ color:'#1fc8db' }}
                               value={this.state.business_postcode}
                               onChange={this.handleBusPostcodeChange}
                           />
                       </div>
                    </div>
        }
    }

    render() {
        const contentStyle = { padding:'20px', marginLeft:'240px' };
        const customCard = { backgroundColor:'#ffffff',
                             padding:'30px',
                             paddingTop:'9px',
                             marginTop:'15px',
                             marginBottom:'15px',
                             borderRadius:'4px',
                             border: '1px solid #ddd',
                             // boxShadow: '0 7px 14px 0 rgba(50, 50, 93, 0.035), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
                           };

        return (
            <div className="row" style={contentStyle}>
                <div className="col-md-4">
                    <div className="above-app-preview-desktop">
                        <Link to="/pages"><FontIcon color={'#1fc8db'} className="material-icons">arrow_back</FontIcon>
                        <span style={{ fontSize:'18px', color:'#1fc8db', position:'relative', bottom:'5px', marginLeft:'4px' }}>Pages</span></Link>
                    </div>
                    <div className="app-preview-desktop tablet-gone">App preview here</div>
                </div>
                <div className="col-md-8">
                    <div className="text-right">
                        <Link to="/pages"><FlatButton labelColor="#272d33" backgroundColor="#ebebeb" label="Cancel" style={{ marginRight:'15px', marginLeft:'15px' }} /></Link>
                        <FlatButton onClick={this.handleSubmit} className="button-bg" labelColor="#ffffff" label="Update Page" />
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
                            <div className="col-xs-12">
                                <TextField
                                    hintText="Page Title"
                                    floatingLabelText="Page Title"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.title}
                                    onChange={this.handleTitleChange}
                                />
                            </div>

                            {this.formFields()}

                            <div className="col-xs-12" style={{ marginTop:'15px' }}>
                                {this.state.featured_image === null &&
                                    <FlatButton
                                        label="Add Featured Image"
                                        labelPosition="before"
                                        containerElement="label"
                                        className="button-bg"
                                        style={{ marginBottom:'-7px' }}
                                    >
                                        <input onChange={(e) => this.handleFeatImageChange(e.target.files)} type="file" style={{ cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0, }} />
                                    </FlatButton>
                                }
                                {this.state.featured_image !== null &&
                                    <div>
                                    <FlatButton
                                        label="Change Featured Image"
                                        labelPosition="before"
                                        containerElement="label"
                                        className="button-bg"
                                        style={{ marginBottom:'-7px' }}
                                    >
                                        <input onChange={(e) => this.handleFeatImageChange(e.target.files)} type="file" style={{ cursor: 'pointer', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width: '100%', opacity: 0, }} />
                                    </FlatButton>
                                    <img style={{ width:'205px', display:'block' }} src={this.state.featured_image} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        {this.state.type !== 'Business Information' &&
                            <div>
                                <FlatButton onClick={this.handleDuplicate} backgroundColor="#ebebeb" label="Duplicate Page" style={{ marginRight:'15px' }} />
                                {this.state.products.length === 0 &&
                                    <FlatButton onClick={this.handleDelete} backgroundColor="#ebebeb" label="Delete Page" />
                                }
                            </div>
                        }
                    </div>
                </div>
           </div>
        );
    }
}
