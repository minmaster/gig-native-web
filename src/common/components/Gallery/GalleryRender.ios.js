'use strict';

import Render from './GalleryRender.native';

export default function () {
    return Render.call(this, this.props, this.state);
}
