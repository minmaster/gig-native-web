'use strict';

import Dimensions from 'Dimensions';
import Button from 'react-native-button';

import React, {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const window = Dimensions.get('window');


var ListItem = function(row) {

    var badge;

    if (row.badge) {
        badge = <View style={styles.badge}><Text style={styles.textBadge}>{row.badge}</Text></View>
    }
    return (
        <TouchableHighlight onPress={this.menuClick.bind(this, row)} >
            <View style={styles.menuItem}>
                <Text style={styles.titleList}>{row.title}</Text>
                {badge}
            </View>
        </TouchableHighlight>
    )
}


export default function () {
  return (
      <View style={styles.menu}>
        <Image source={require('../../images/bgmenu.jpg')} style={styles.bgMenu} resizeMode="cover" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.profileImage}>
                        <Image style={styles.avatar} source={require('../../images/avatar.jpg')} />
                    </View>
                    <View style={styles.profileText}>
                        <Text style={styles.profileName}>Hi Matteo</Text>
                        <Text style={styles.profileButton}>Profile</Text>
                    </View>
                </View>
                <ScrollView style={styles.menuList}>
                    <ListView
                        dataSource= {this.state.menuItems}
                        renderRow={(rowData) => ListItem.call(this, rowData)}
                        style={styles.list}
                    />
                    <Button style={styles.buttonSetting}><Image style={styles.imageButton} source={require('../../images/btn-settings.png')} /></Button>
                </ScrollView>
            </View>
      </View>
  );
}

var styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width - 60,
        height: window.height
    },
    bgMenu: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: window.width - 60,
        height: window.height
    },
    content: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: window.width - 60,
        height: window.height,
        padding: 20,
        paddingTop: 30
    },
    profile: {
        flexDirection: 'row',
        marginBottom: 20
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: 'white',
        borderWidth: 2
    },
    profileImage: {
        marginRight: 15
    },
    profileName: {
        color: 'white',
        fontSize: 25,
        fontWeight: '200'
    },
    profileButton: {
        color: 'white',
        fontSize: 13,
        fontWeight: '400'
    },
    menuList: {
        flex: 1
    },
    menuItem: {
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#86868e',
        borderBottomWidth: 1,
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'row'
    },
    titleList: {
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#d82d33',
        marginLeft: 5,
        marginTop: 3,
        alignItems: 'center'
    },
    textBadge: {
        color: 'white',
        fontSize: 10
    },
    buttonSetting: {
        width: 40,
        height: 40
    },
    list: {
        marginBottom: 20
    },
    imageButton: {
        width: 40,
        height: 40
    }
});
