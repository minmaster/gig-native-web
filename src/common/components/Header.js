'use strict';

import Base from './HeaderBase';
import Render from './HeaderRender';
import React from 'react';

export default class Header extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}

Header.contextTypes = {
  menuActions: React.PropTypes.object.isRequired
};
