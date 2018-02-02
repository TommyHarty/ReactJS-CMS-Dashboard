import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navigation from './Navigation';

export default class Theme extends Component {
    render() {
      const muiTheme = getMuiTheme({
          fontFamily: 'Ubuntu, sans-serif',
          palette: {
              primary1Color: '#1fc8db',
          },
      });
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <Navigation />
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
