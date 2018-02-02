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
            status: true,
            auth_id:'',
            title:'',
            type:'Products',
            featured_image:'',
            content:'',
            above_content:'',
            below_content:'',
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAboveChange = this.handleAboveChange.bind(this);
        this.handleBelowChange = this.handleBelowChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFeatImageChange = this.handleFeatImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    handleSubmit(){
        const data = {
            status: this.state.status,
            title:this.state.title,
            type:this.state.type,
            featured_image:this.state.featured_image,
            content:this.state.content,
            above_content:this.state.above_content,
            below_content:this.state.below_content,
        }
        let uri = 'http://localhost:8000/store-page';
        axios.post(uri, data).then((response) => {
            browserHistory.push('/pages');
        })
        .catch(function (error) {
            console.log(error);
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
                    <small style={{ position:'relative', bottom:'7px' }}>This will be visible above your {this.state.title} {this.state.type}</small>
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
                    <small style={{ position:'relative', bottom:'7px' }}>This will be visible below your {this.state.title} {this.state.type}</small>
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
        }
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
                        <Link to="/pages"><FontIcon color={'#1fc8db'} className="material-icons">arrow_back</FontIcon>
                        <span style={{ fontSize:'18px', color:'#1fc8db', position:'relative', bottom:'5px', marginLeft:'4px' }}>Pages</span></Link>
                    </div>
                    <div className="app-preview-desktop tablet-gone">App preview here</div>
                </div>
                <div className="col-md-8">
                    <div className="text-right">
                        <Link to="/pages"><FlatButton label="Cancel" backgroundColor="#ebebeb" style={{ marginRight:'15px', marginLeft:'15px', borderRadius:'4px' }} /></Link>
                        <FlatButton onClick={this.handleSubmit} className="button-bg" label="Save Page" />
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
                                    hintText="Page Title"
                                    floatingLabelText="Page Title"
                                    fullWidth={true}
                                    underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                    floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                    value={this.state.title}
                                    onChange={this.handleTitleChange}
                                />
                            </div>
                            <div className="col-xs-6">
                              <SelectField
                                  floatingLabelText="Page Type"
                                  fullWidth={true}
                                  underlineStyle={{ borderColor:'#2b3239', borderWidth:'1px' }}
                                  floatingLabelFocusStyle={{ color:'#1fc8db' }}
                                  selectedMenuItemStyle={{ color:'#1fc8db' }}
                                  value={this.state.type}
                                  onChange={this.handleTypeChange}
                              >
                                  <MenuItem value={'Products'} primaryText="Products" />
                                  <MenuItem value={'Basic'} primaryText="Basic" />
                              </SelectField>
                            </div>

                            {this.formFields()}

                            <div className="col-xs-12" style={{ marginTop:'15px' }}>
                                {this.state.featured_image === '' &&
                                    <FlatButton
                                        label="Add Featured Image"
                                        className="button-bg"
                                        style={{ marginBottom:'-7px' }}
                                        labelPosition="before"
                                        containerElement="label"
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
