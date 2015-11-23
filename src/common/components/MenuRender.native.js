'use strict';

import Dimensions from 'Dimensions';

import React, {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const window = Dimensions.get('window');

export default function () {
  return (
      <View style={styles.menu}>
        <Image source={require('../../images/bgmenu.jpg')} style={styles.bgMenu} resizeMode="cover" />
        <Text>Prueba</Text>
      </View>
  );
}

var styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height
    },
    bgMenu: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: window.width,
        height: window.height
    },
});
