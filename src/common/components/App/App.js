'use strict';

import Base from './AppBase';
import Render from './AppRender';

import { Component } from 'react';

export default class App extends Base {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
