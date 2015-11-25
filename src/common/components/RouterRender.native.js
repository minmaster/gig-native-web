'use strict';

import Header from './Header';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Dimensions from 'Dimensions';
import Home from './Home';

import React, {
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';

const window = Dimensions.get('window');
var menuHeight = window.width - 60;


export default function () {
  return (
      <SideMenu menu={<Menu navigator={this.state.nav}/>} openMenuOffset={menuHeight}>
          <View style={styles.content}>
            <Header  />
            <Navigator
                ref="nav"
                style={styles.content}
                renderScene={this.renderScene.bind(this)}
                initialRoute={{
                    title: 'Home',
                    component: Home,
                    id: 'home'
                }} />
          </View>
      </SideMenu>
  );
}

var styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#122333'
    }
});
