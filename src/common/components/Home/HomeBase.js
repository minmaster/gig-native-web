'use strict';

import { Component } from 'react';
import HomeStore from '../../stores/HomeStore';
import { Navigation } from 'react-router'

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
          console.log(data);
          this.setState({items: data.home});
      })
  }

  handleClick(item, type) {
    if (type === 'native') {
      this.props.navigator.push({
            id: item.action,
            passProps: {item: item},
        });
     }

     if (type === 'web') {
        this.props.history.pushState(item.action, item.action+'/'+item.params.id, {item: item})
     }
  }


}


module.exports = Home;
