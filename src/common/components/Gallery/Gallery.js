'use strict';

import Render from './GalleryRender';

import { Component } from 'react';

export default class Gallery extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
