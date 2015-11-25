'use strict';

import { Component } from 'react';
import ArticleStore from '../stores/ArticleStore';

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: ArticleStore.getItem(this.props.item.params.id)[0]
    };
  }

}

module.exports = Article;
