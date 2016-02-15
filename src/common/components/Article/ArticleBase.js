'use strict';

import { Component } from 'react';
import ArticleStore from '../../stores/ArticleStore';
import ArticleActions from '../../actions/ArticleActions';

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {}
        };

        this._onChange = this._onChange.bind(this);
    }

    componentWillMount () {
        ArticleStore.addChangeListener(this._onChange);
    }

    componentDidMount () {

        var id;

        if (this.props.item) {
            id = this.props.item.params.id;
        }
        else {
            id = this.props.params.id;
        }

        ArticleActions.getArticle(id);
    }

    componentWillUnmount () {
        ArticleStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            item : ArticleStore.getArticle()
        });
        console.log(this.state);
    }

}

module.exports = Article;
