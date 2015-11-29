'use strict';

import { Component } from 'react';
import VideoStore from '../stores/VideoStore';

class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
        item: {}
    }
  }

  componentDidMount() {
      var item = this.props.item || this.props.location.query.item;

      VideoStore.getVideo(item.params.id).then((data) => {
          this.setState({item: data})
      })
  }

}


module.exports = Video;
