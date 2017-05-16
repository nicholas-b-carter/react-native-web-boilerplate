import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route, // eslint-disable-line
  Link // eslint-disable-line
} from 'react-router-dom'

import muiThemeable from 'material-ui/styles/muiThemeable'

import Topbar from './Topbar'
import AboutMe from './AboutMe'

class Navigation extends Component {
  render () {
    return (
      <Router>
        <div>
          <Topbar />
          <AboutMe />
        </div>
      </Router>
    )
  }
}

export default muiThemeable()(Navigation)
