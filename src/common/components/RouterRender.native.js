'use strict';

import Header from './Header';
import Home from './Home';

import React, {
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';


export default function () {
  return (
      <View style={styles.container}>
        <Header />
        <NavigatorIOS style={styles.content} initialRoute={{
          title: 'Home',
          component: Home,
      }} />
      </View>
  );
}

var styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#122333'
    }
});
