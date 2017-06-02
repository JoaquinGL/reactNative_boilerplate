/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    const {
      logoStyle,
      containerStyle,
    } = styles;

    return(
        <View style = { containerStyle }>
          <TouchableOpacity onPress={() => navigate('Components')}>
            <Image
              resizeMode= "contain"
              style= { logoStyle }
              source= { require('../assets/images/logoHanzo.png') } />
          </TouchableOpacity>
        </View>
    );
  }
}

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    position: 'relative'
  },
  logoStyle: {
    width: width,
    marginLeft: 30
  },
})

export default Home;
