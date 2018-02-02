import React from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const contentStyle = {  marginLeft:'256px', marginTop:'63px' };
        const headerWrap = { backgroundColor:'rgba(255,255,255,1)',
                             position:'fixed',
                             top:'0px',
                             left:'256px',
                             boxShadow:'0px',
                             borderBottom:'1px solid #ddd'
                            };

        return(
            <div style={contentStyle}>
                <AppBar style={headerWrap}
                    // title="App Builder"
                    // titleStyle={{ color:'#2b323a' }}
                    // iconElementRight={<IconButton>
                    //                       <FontIcon color={'#2b323a'} className="material-icons">phonelink_setup</FontIcon>
                    //                   </IconButton>}
                    // iconElementLeft={<IconButton>
                    //                       <FontIcon color={'#2b323a'} className="material-icons">phonelink_setup</FontIcon>
                    //                   </IconButton>}
                />
          </div>
      );
    }
}

export default Header;
