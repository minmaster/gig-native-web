'use strict';

import React, {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

var getImage = function(image) {
    return 'http://cokestream.gigigo.com/assets/img/'+image;
}

var textUppercase = function(text) {
    if (text) {
        return text.toUpperCase();
    }

}

export default function (props, state) {
  return (
    <ScrollView>
        <View style={styles.home}>
          {this.state.items.map(function(item, i) {
            return <TouchableHighlight key={i} onPress={this.handleClick.bind(this, item, 'native')} style={styles.homeItems} >
            <View style={styles.homeItems} >
                <View style={styles.imageBox}>
                    <Image source={{uri: getImage(item.image)}} style={styles.homeImage} />
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.caption}>{textUppercase(item.caption)}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
            </TouchableHighlight>
          }, this)}
        </View>
    </ScrollView>
  );
}



var styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeItems: {
        height: 250,
        flex: 1,
        borderBottomWidth: 3,
        borderColor: 'white',
        alignSelf: 'stretch',
    },
    imageBox: {
        flex: 1,
        alignSelf: 'stretch',
    },
    textBox: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 20
    },
    homeImage: {
        resizeMode: 'cover',
        flex: 1,
        alignSelf: 'stretch'
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 25,
        fontFamily: 'Helvetica',
        fontWeight: '100'
    },
    subtitle: {
        color: 'white',
        fontSize: 16
    },
    caption: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    }
});
