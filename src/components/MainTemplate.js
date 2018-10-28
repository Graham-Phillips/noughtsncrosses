import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import NavSideBar from './NavSideBar';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles'
import { Header, Main } from './styled/MainTemplate' 

const theme = createMuiTheme();

const MainTemplate  = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div>
        <NavSideBar />
        <Header>
          Noughts n Crosses
        </Header>
        <Main>
          <Route exact path='/' component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path="/about" component={About}/>
        </Main>
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