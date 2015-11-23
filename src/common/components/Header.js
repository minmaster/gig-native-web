'use strict';

import Render from './HeaderRender';

import { Component } from 'react';

export default class Header extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
