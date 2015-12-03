'use strict';

import { Component } from 'react';
import MenuStore from '../../stores/MenuStore';
import MenuActions from '../../actions/MenuActions';
import Navigation from '../../utils/navigation';

import React, {
  ListView
} from 'react-native';

class Menu extends Component {

  constructor(props) {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      super(props);
      this.state = {
          menuItems: ds.cloneWithRows([])
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

  menuClick(item, type) {
      this.context.menuActions.close();
      var currentRoute = Navigation.getCurrentRoute(this.props.navigator.getCurrentRoutes());

      if (currentRoute.id != item.id) {
          setTimeout(() =>  {
              this.props.navigator.push({
                  title: item.title,
                  id: item.id
              })
          }, 250)
      }
  }
    _onChange() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            menuItems : ds.cloneWithRows(MenuStore.getMenu())
        });
    }


}

module.exports = Menu;
