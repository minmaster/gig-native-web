'use strict';

import Render from './ArticleRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
