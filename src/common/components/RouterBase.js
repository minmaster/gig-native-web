'use strict';

import { Component } from 'react';

class Router extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.refs.nav.push(otherRoute);
  }


}

module.exports = Router;
