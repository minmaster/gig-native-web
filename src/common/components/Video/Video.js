'use strict';

import Base from './VideoBase';
import Render from './VideoRender';

export default class Video extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
