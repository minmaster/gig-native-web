'use strict';

import { Component } from 'react';
import HomeStore from '../stores/HomeStore';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: []
    }

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
      HomeStore.getData().then(data => {
          this.setState({items: data.home})
          console.log(this.state);
      })
  }

  handleClick(item) {
      this.props.navigator.push({
            id: item.action,
            passProps: {item: item},
        });
  }


}

module.exports = Home;
