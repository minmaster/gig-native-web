'use strict';

import Render from './VideoRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
