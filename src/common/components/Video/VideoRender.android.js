'use strict';

import Button from 'react-native-button';
import WebViewAndroid from 'react-native-webview-android';

import React, {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  Text,
  Image
} from 'react-native';


export default function () {
  return (
      <ScrollView style={styles.container}>
        {(this.state.item.source) ?
            <WebViewAndroid
              ref="webViewAndroidSample"
              javaScriptEnabled={true}
              geolocationEnabled={false}
              builtInZoomControls={false}
              url={'http://www.youtube.com/watch?v='+this.state.item.source}
              style={styles.containerWebView} />
        : <View /> }
        <View style={styles.detail}>
            <Text style={styles.title}>{this.state.item.title}</Text>
            <Text style={styles.description}>{this.state.item.description}</Text>
            <View style={styles.buttons}>
                <Button style={styles.button}><Image style={styles.buttonImage} source={require('../../../images/btn-circle-download.png')} /></Button>
                <Button style={styles.button}><Image style={styles.buttonImage} source={require('../../../images/btn-circle-share.png')} /></Button>
            </View>
        </View>
      </ScrollView>
  );
}


var styles = StyleSheet.create({
    containerWebView: {
        flex: 1,
        height: 250
    },
    container: {
        flex: 1,
        backgroundColor: '#363744'
    },
    detail: {
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        paddingBottom: 20
    },
    description: {
        fontSize: 14,
        fontWeight: '200',
        color: 'white'
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
