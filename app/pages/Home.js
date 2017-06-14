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

import {
  Button
} from 'react-native-elements';

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

    return (
        <View style = { containerStyle }>
          <TouchableOpacity onPress={() => navigate('ComponentRootContainer')}>
            <Image
              resizeMode= "contain"
              style= { logoStyle }
              source= { require('../assets/images/logoHanzo.png') } />
          </TouchableOpacity>
          <Button
            buttonStyle={styles.button}
            backgroundColor={'#000'}
            icon={{name: 'dashboard'}}
            onPress={() => navigate('Rom')}
            title='Rom'/>
          <Button
            buttonStyle={styles.button}
            backgroundColor={'#000'}
            icon={{name: 'collections'}}
            onPress={() => navigate('ComponentRootContainer')}
            title='Components Gallery'/>
          <Button
            buttonStyle={styles.button}
            backgroundColor={'#000'}
            icon={{name: 'credit-card'}}
            onPress={() => navigate('ComponentRootContainer')}
            title='Pull & Bear'/>
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
