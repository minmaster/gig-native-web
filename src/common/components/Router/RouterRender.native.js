'use strict';

import Header from '../Header/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu/Menu';
import Dimensions from 'Dimensions';
import Home from '../Home/Home';

import React, {
  StyleSheet,
  Navigator,
  View,
  Text,
  BackAndroid
} from 'react-native';

const window = Dimensions.get('window');
var menuHeight = window.width - 60;

export default function () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        console.log('pasa');
        this.refs.nav.pop();
        return true;
    });


  return (
      <SideMenu ref="sidemenu" menu={<Menu navigator={this.state.nav}/>} openMenuOffset={menuHeight} defaultOpen={this.state.menu}>
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
