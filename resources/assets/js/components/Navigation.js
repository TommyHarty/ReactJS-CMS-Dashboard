import React from 'react';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Router, Route, Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';

import Header from './Header';
import Dashboard from './Dashboard';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opendrawer: true,
            open: true,
            activeDashboard: true,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: false,
            activeSales: false,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.activeDashboard = this.activeDashboard.bind(this);
        this.activeDesign = this.activeDesign.bind(this);
        this.activePages = this.activePages.bind(this);
        this.activeProducts = this.activeProducts.bind(this);
        this.activeOrders = this.activeOrders.bind(this);
        this.activeCustomers = this.activeCustomers.bind(this);
        this.activeNotifications = this.activeNotifications.bind(this);
        this.activeReviews = this.activeReviews.bind(this);
        this.activeSettings = this.activeSettings.bind(this);
        this.activeAnalytics = this.activeAnalytics.bind(this);
        this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleNestedListToggle(item){
        this.setState({
            open: item.state.open,
        });
    };

    activeDashboard() {
        this.setState({
            activeDashboard: true,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: false,
            activeSales: false,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeDesign() {
        this.setState({
            activeDashboard: false,
            activeDesign: true,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: true,
            activeSales: false,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activePages() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: true,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: true,
            activeSales: false,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeProducts() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: true,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: true,
            activeSales: false,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeOrders() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: true,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: false,
            activeSales: true,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeCustomers() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: true,
            activeNotifications: false,
            activeReviews: false,
            activeApp: false,
            activeSales: true,
            activeInteraction: false,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeNotifications() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: true,
            activeReviews: false,
            activeApp: false,
            activeSales: false,
            activeInteraction: true,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeReviews() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: true,
            activeApp: false,
            activeSales: false,
            activeInteraction: true,
            activeSettings: false,
            activeAnalytics: false,
        });
    }

    activeSettings() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: true,
            activeSales: false,
            activeInteraction: false,
            activeSettings: true,
            activeAnalytics: false,
        });
    }

    activeAnalytics() {
        this.setState({
            activeDashboard: false,
            activeDesign: false,
            activePages: false,
            activeProducts: false,
            activeOrders: false,
            activeCustomers: false,
            activeNotifications: false,
            activeReviews: false,
            activeApp: false,
            activeSales: false,
            activeInteraction: true,
            activeSettings: false,
            activeAnalytics: true,
        });
    }

    render() {
        const sidebarStyle = {  background:'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)', boxShadow:'0 7px 14px 0 rgba(0, 0, 0, 0.07), 0 3px 6px 0 rgba(0, 0, 0, 0.07)' };

        return (
            <div>
                <Drawer open={this.state.opendrawer} containerStyle={sidebarStyle}>
                    <List style={{ paddingTop:'0px' }}>
                      <div style={{ fontSize:'21px', color:'white', height:'65px', maxHeight:'65px', lineHeight:'65px', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,0.35)', paddingLeft:'15px', }}>
                          {/* <img src="/images/atb-web-210.png" style={{ position:'relative', bottom:'1px', width:'105px' }} /> */}
                          UppCart
                      </div>
                      <Link to="/dashboard">
                          <ListItem onClick={this.activeDashboard} className={this.state.activeDashboard ? 'active' : ''} style={{ color:'#ffffff',  borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px' }}>
                              <FontIcon style={{ fontSize:'21px', color:'#ffffff', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                  important_devices
                              </FontIcon>
                              Dashboard
                          </ListItem>
                      </Link>
                      <ListItem
                        className={this.state.activeApp ? 'active-top-tier' : ''}
                        style={{ color:'#ffffff', borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px' }}
                        primaryText="Your App"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        rightIcon={<FontIcon color={'#ffffff'} className='material-icons'>
                                       keyboard_arrow_down
                                   </FontIcon>}
                        nestedItems={[
                            <Link to="/design">
                                <ListItem onClick={this.activeDesign} className={this.state.activeDesign ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        wallpaper
                                    </FontIcon>
                                    Design
                                </ListItem>
                            </Link>,
                            <Link to="/pages">
                                <ListItem onClick={this.activePages} className={this.state.activePages ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        library_books
                                    </FontIcon>
                                    Pages
                                </ListItem>
                            </Link>,
                            <Link to="/products">
                                <ListItem onClick={this.activeProducts} className={this.state.activeProducts ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        local_offer
                                    </FontIcon>
                                    Products
                                </ListItem>
                            </Link>,
                            <Link to="/settings">
                                <ListItem onClick={this.activeSettings} className={this.state.activeSettings ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', marginBottom:'-16px', position:'relative', borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px'  }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        settings
                                    </FontIcon>
                                    Settings
                                </ListItem>
                            </Link>
                        ]}
                      />
                      <ListItem
                        className={this.state.activeSales ? 'active-top-tier' : ''}
                        style={{ color:'#ffffff', borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px' }}
                        primaryText="Your Sales"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        rightIcon={<FontIcon color={'#ffffff'} className='material-icons'>
                                       keyboard_arrow_down
                                   </FontIcon>}
                        nestedItems={[
                            <Link to="/orders">
                                <MenuItem onClick={this.activeOrders} className={this.state.activeOrders ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        add_shopping_cart
                                    </FontIcon>
                                    Orders
                                </MenuItem>
                            </Link>,
                            <Link to="/customers">
                                <MenuItem onClick={this.activeCustomers} className={this.state.activeCustomers ? 'active' : ''} style={{ color:'#ffffff', marginBottom:'-16px', position:'relative', bottom:'8px', borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px'  }}>
                                    <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                        person_add
                                    </FontIcon>
                                    Customers
                                </MenuItem>
                            </Link>
                        ]}
                      />
                      <ListItem
                        className={this.state.activeInteraction ? 'active-top-tier' : ''}
                        style={{ color:'#ffffff', borderBottom:'1px solid rgba(255,255,255,0.35)', fontSize:'15px' }}
                        primaryText="Interaction"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        rightIcon={<FontIcon color={'#ffffff'} className='material-icons'>
                                       keyboard_arrow_down
                                   </FontIcon>}
                        nestedItems={[
                          <Link to="/notifications">
                              <MenuItem onClick={this.activeNotifications} className={this.state.activeNotifications ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                  <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                      tap_and_play
                                  </FontIcon>
                                  Push Notifications
                              </MenuItem>
                          </Link>,
                          <Link to="/analytics">
                              <MenuItem onClick={this.activeAnalytics} className={this.state.activeAnalytics ? 'active' : ''} style={{ color:'#ffffff', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                  <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                      timeline
                                  </FontIcon>
                                  Analytics
                              </MenuItem>
                          </Link>,
                          <Link to="/reviews">
                              <MenuItem onClick={this.activeReviews} className={this.state.activeReviews ? 'active' : ''} style={{ color:'#ffffff', marginBottom:'-16px', position:'relative', bottom:'8px', fontSize:'15px' }}>
                                  <FontIcon color={'#ffffff'} style={{ fontSize:'21px', top:'6px', marginRight:'9px', marginTop:'-8px', }} className="material-icons">
                                      stars
                                  </FontIcon>
                                  Reviews
                              </MenuItem>
                          </Link>
                        ]}
                      />
                    </List>
                </Drawer>
                <Header />
            </div>
        );
    }
}
