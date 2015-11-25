'use strict';

import { Component } from 'react';
import VideoStore from '../stores/VideoStore';

class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: VideoStore.getVideo(this.props.item.params.id)[0]
    };

  }


}

module.exports = Video;
