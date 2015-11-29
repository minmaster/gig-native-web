'use strict';

import Render from './RouterRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
