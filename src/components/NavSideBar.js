import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom'
import { NavToggleButton } from './styled/NavSideBar'

const styles = {
    sideNav: {
      width: "250px",
    },
  };

class NavSideBar  extends React.Component {

    state = {
        isOpen: false,
        width: 250
      };

    toggleDrawer = () => {
  
        this.setState((prevState, props) => {
           console.log("setstate")
            return {
            isOpen: !prevState.isOpen
          }
        });
      };

    navigate(destination) {
        this.toggleDrawer();
        this.props.history.push(destination);
    };

    render() {
        return (
            <div>
                <NavToggleButton 
                    toggle={this.toggleDrawer}
                    width={this.state.width}
                    isOpen={this.state.isOpen}
                />
                <Drawer open={this.state.isOpen} 
                        width={this.state.width}
                        onClose={this.toggleDrawer}>
                    <div
                        style={{
                            height: '200px',
                            width: '100%',
                            backgroundColor: "salmon"
                        }}>
                    </div>
                    <List component="nav">
                        <ListItem button onClick={this.navigate.bind(this, '/play')}>
                        <ListItemText primary="Play" />
                        </ListItem>
                        <ListItem button onClick={(e)=> this.navigate('/profile')}>
                        <ListItemText primary="Profile" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
} 
    

export default withRouter(withStyles(styles)(NavSideBar));
