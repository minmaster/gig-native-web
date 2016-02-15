'use strict';

import { Component } from 'react';
import VideoStore from '../../stores/VideoStore';

class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
        item: {}
    }
  }

  componentDidMount() {

      var id;

      console.log(this.props);

      if (this.props.item) {
          id = this.props.item.params.id;
      } else {
          id = this.props.params.id;
      }
      console.log(id);

      VideoStore.getVideo(id).then((data) => {
          this.setState({item: data})
      })
  }

}


module.exports = Video;
