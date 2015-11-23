'use strict';

import { Component } from 'react';
import HomeStore from '../stores/HomeStore';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: HomeStore.getData()
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item) {
      console.log(item);
  }


}

module.exports = Home;
