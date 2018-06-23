import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const theme = createMuiTheme();

const MainTemplate  = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div>
        <header>
          <h1>Noughts n Crosses</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </header>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path="/about" component={About}/>
      </div>
    </MuiThemeProvider>
  </Router>
)


export default MainTemplate


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)