'use strict';

import YouTube from 'react-native-youtube';
import Button from 'react-native-button';

import React, {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  Text,
  Image,
  WebView
} from 'react-native';


export default function () {
  return (
      <ScrollView style={styles.container}>
        {(this.state.item.source) ?
            <YouTube
               ref="youtubePlayer"
               videoId={this.state.item.source}
               play={false}
               playsInline={true}
               hidden={false}
               style={styles.video}/>
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
