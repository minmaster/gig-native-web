'use strict';

import { Component } from 'react';
import MenuStore from '../../stores/MenuStore';
import MenuActions from '../../actions/MenuActions';
import Router, { History } from 'react-router';



class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          menuItems:[]
      };

      this.menuClick = this.menuClick.bind(this);
      this._onChange = this._onChange.bind(this);
  }


  componentWillMount () {
      MenuStore.addChangeListener(this._onChange);
  }

  componentDidMount () {
      MenuActions.getMenu();
  }

  componentWillUnmount () {
      MenuStore.removeChangeListener(this._onChange);
  }

  menuClick(item) {
      this.context.menuActions.close();


      setTimeout(() =>  {
          if (item.path)
          this.props.navigation.history.pushState(null, item.path)
      }, 250)
  }
    _onChange() {
        this.setState({
            menuItems : MenuStore.getMenu()
        });
    }


}

module.exports = Menu;
