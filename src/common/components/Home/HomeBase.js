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
          this.setState({items: data.home});
      })
  }

  handleClick(item, type) {
      if (!item.action) {
          return null;
      }

      if (type === 'native') {
          this.props.navigator.push({
              id: item.action,
              passProps: {item: item}
          });
      }

      if (type === 'web') {

          var url;
          if (item.params) {
              url = item.action+'/'+item.params.id;
          } else{
              url = item.action;
          }

          this.props.history.pushState(item.action, url, {item: item})
      }
  }
}


module.exports = Home;
