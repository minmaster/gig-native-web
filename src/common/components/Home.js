'use strict';

import Base from './HomeBase';
import Render from './HomeRender';

export default class Home extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
