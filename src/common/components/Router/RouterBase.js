'use strict';

import { Component } from 'react';
import Home from '../Home/Home';
import Video from '../Video/Video';
import Article from '../Article/Article';
import Gallery from '../Gallery/Gallery';
import React from 'react';

class Router extends Component {

  constructor(props) {
      super(props);
      this.state = {
          nav: null,
          isOpen: false
      }

      this.updateMenuState = this.updateMenuState.bind(this);
      this.toggle = this.toggle.bind(this);
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  close() {
      this.setState({
          isOpen: false
      })
  }

  open() {
      this.setState({
          isOpen: true
      })
  }

  getChildContext() {
      return {
          menuActions: this.getMenuActions()
      };
  }

  getMenuActions() {
      return {
          toggle: this.toggle.bind(this),
          open: this.open.bind(this),
          close: this.close.bind(this)
      }
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
            return(<Home navigator={nav} />)
          break;
      }
  }

  componentDidMount() {
      this.setState({
          nav: this.refs.nav
      });
  }

}


module.exports = Router;
