'use strict';

import Render from './MenuRender';

import { Component } from 'react';

export default class Menu extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
