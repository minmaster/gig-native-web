'use strict';

import Header from './Header';
import Home from './Home';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Dimensions from 'Dimensions';

import React, {
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';

const window = Dimensions.get('window');
var menuHeight = window.width - 60;


export default function () {
  return (
      <SideMenu menu={<Menu />} openMenuOffset={menuHeight}>
          <View style={styles.content}>
            <Header />
            <NavigatorIOS
                style={styles.content}
                navigationBarHidden="true"
                initialRoute={{
                    title: 'Home',
                    component: Home,
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
