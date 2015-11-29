'use strict';

import Render from './HeaderRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
