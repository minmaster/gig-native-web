'use strict';

import { Component } from 'react';
import MenuStore from '../stores/MenuStore';

import React, {
  ListView,
  NavigatorIOS
} from 'react-native';

class Menu extends Component {

  constructor(props) {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      super(props);
      this.state = {
          menuItems: ds.cloneWithRows(MenuStore.getData())
      };

      this.menuClick = this.menuClick.bind(this);
  }
  menuClick(item) {
      this.context.menuActions.close();

      setTimeout(() =>  {
          this.props.navigator.push({
              title: item.title,
              id: item.id
          })
      }, 250)
  }


}

module.exports = Menu;
