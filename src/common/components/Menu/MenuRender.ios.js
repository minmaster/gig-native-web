'use strict';

import Render from './MenuRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
