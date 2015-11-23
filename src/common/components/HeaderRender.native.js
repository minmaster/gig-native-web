'use strict';

import Button from 'react-native-button';

import React, {
  StyleSheet,
  View,
  Text,
  Image,
  Platform
} from 'react-native';

var logo = require('../../images/logo.png');
var btnScan = require('../../images/btnScan.png');
var btnMenu = require('../../images/btnMenu.png');

export default function () {
  return (
    <View style={styles.toolbar}>
        <Button styleDisabled={{color: 'red'}} onPress={this._handlePress}>
            <Image style={styles.toolbarButton} source={btnMenu} resizeMode="contain" />
        </Button>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
      <Button
        styleDisabled={{color: 'red'}}
        onPress={this._handlePress}
      >
      <Image style={styles.toolbarButton} source={btnScan} resizeMode="contain" />
      </Button>
    </View>
  );
}

var styles = StyleSheet.create({
    toolbar: {
        height: 50,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ba1219'
    },
    toolbarButton: {
        width: 30,
        height: 30,
        marginTop: 5
    },
    logo: {
        width: 200,
        height: 40,
        flex: 1,
    }
});
