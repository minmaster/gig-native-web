'use strict';

import Carousel from 'react-native-carousel';
import Dimensions from 'Dimensions';

import React, {
  StyleSheet,
  View,
  Platform,
  Text,
  Image
} from 'react-native';

const window = Dimensions.get('window');

var getImage = function(image) {
    return 'http://cokestream.gigigo.com/'+image;
}


export default function () {
  return (
      <Carousel width={window.width} animate={false} hideIndicators={true}>
          <View style={styles.container}>
            <Image source={require('../../../images/gallery01.jpg')} style={styles.image}></Image>
          </View>
          <View style={styles.container}>
            <Image source={require('../../../images/gallery02.jpg')} style={styles.image}></Image>
          </View>
          <View style={styles.container}>
            <Image source={require('../../../images/gallery03.jpg')} style={styles.image}></Image>
          </View>
          <View style={styles.container}>
            <Image source={require('../../../images/gallery04.jpg')} style={styles.image}></Image>
          </View>
          <View style={styles.container}>
            <Image source={require('../../../images/gallery05.jpg')} style={styles.image}></Image>
          </View>
      </Carousel>
  );
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: '#363744'
    },
    image: {
        width: window.width,
        height: window.height,
        resizeMode: 'cover'
    }
});
