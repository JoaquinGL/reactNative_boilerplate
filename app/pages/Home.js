/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

class Home extends Component {

  render() {
    const {
      logoStyle,
      containerStyle,
    } = styles;

    return(
        <View style = { containerStyle }>
          <Image
            resizeMode= "contain"
            style= { logoStyle }
            source= { require('../assets/images/logoHanzo.png') } />
        </View>
    );
  }
}

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  logoStyle: {
    width: width
  },
})

export default Home;
