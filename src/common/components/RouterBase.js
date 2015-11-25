'use strict';

import { Component } from 'react';
import Home from './Home';
import Video from './Video';
import Article from './Article';
import Gallery from './Gallery';
import React from 'react';

class Router extends Component {

  constructor(props) {
    super(props);
  }
  renderScene(route, nav) {
      var Component;

      if (route.component) {
          Component = route.component;
      }

      switch(route.id) {
          case 'videos':
            return(<Video navigator={nav} item={route.passProps.item} />)
          break;
          case 'gallery':
            return(<Gallery navigator={nav} />)
          break;
          case 'articles':
            return(<Article navigator={nav} item={route.passProps.item} />)
          break;
          case 'home':
            return(<Home navigator={nav} />)
          break;
          default:
            return(<Component navigator={nav} />)
          break;
      }
  }

  componentDidMount() {
      this.setState({'nav': this.refs.nav})
  }


}

module.exports = Router;
