'use strict';

import Base from './RouterBase';
import Render from './RouterRender';
import React from 'React';

export default class Router extends Base {
  constructor (props) {
    super(props);
    this.state = {
      nav: null
    };
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
