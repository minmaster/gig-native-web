'use strict';

import Router from './Router';
import Button from 'react-native-button';
import ParallaxView from 'react-native-parallax-view';

import React, {
  StyleSheet,
  View,
  Platform,
  Text,
  Image
} from 'react-native';

var getImage = function(image) {
    return 'http://cokestream.gigigo.com/'+image;
}


export default function () {
  return (
      <ParallaxView
        style={styles.container}
        backgroundSource={{uri: getImage(this.state.item.image)}}
        windowHeight={350}>
        <View style={styles.content}>
            <View style={styles.detail}>
                <Text style={styles.title}>{this.state.item.title}</Text>
                <Text style={styles.description}>{this.state.item.description}</Text>

                <View style={styles.buttons}>
                    <Button style={styles.button}><Image style={styles.buttonImage} source={require('../../images/btn-circle-download.png')} /></Button>
                    <Button style={styles.button}><Image style={styles.buttonImage} source={require('../../images/btn-circle-share.png')} /></Button>
                </View>
            </View>
        </View>
      </ParallaxView>
  );
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363744'
    },
    imageBox: {
        flex: 1,
        height: 400,
        width: 700,
        left: 0,
        top: 0,
        backgroundColor: 'red',
        alignSelf: 'stretch',
    },
    image : {
        flex: 1,
        alignSelf: 'stretch',
        height: 400,
        width: 700,
    },
    content: {
        flex: 1
    },
    detail: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '100',
        color: 'black',
        paddingBottom: 20
    },
    description: {
        fontSize: 14,
        fontWeight: '200',
        color: 'black'
    },
    video: {
        alignSelf: 'stretch',
        height: 250
    },
    buttons: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row'
    },
    button: {
        width: 40,
        height: 40
    },
    buttonImage: {
        width: 40,
        height: 40,
        marginRight: 10
    }
});
