/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  Button
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

let styles = {};

const log = () => {
  console.log('button Pressed!');
};

const color = (colorType) => {
  switch (colorType) {
    case 'grey':
      return '#CACACA';
    case 'black':
      return '#313131';
    case 'blue':
      return '#4584F1';
    case 'cyan':
      return '#2C8E81';
    case 'red':
      return '#8A1F21';
    default:
      return '#000';
  }
};

class ButtonsGallery extends React.Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
          <Icon color='white' name='whatshot' size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <View>
          <Button
            title='BUTTON'
            backgroundColor={color('red')}
            onPress={() => log()}
            buttonStyle={styles.button} />
          <Button
            buttonStyle={styles.button}
            backgroundColor={color('black')}
            icon={{name: 'account', type: 'material-community'}}
            onPress={() => log()}
            title='BUTTON WITH LEFT ICON'/>
          <Button
            buttonStyle={styles.button}
            iconRight
            backgroundColor={color('grey')}
            icon={{name: 'invert-colors'}}
            onPress={() => log()}
            title='BUTTON WITH RIGHT ICON'/>
          <Button
            large={true}
            buttonStyle={styles.button}
            onPress={() => log()}
            backgroundColor={color('cyan')}
            title='LARGE BUTTON' />
          <Button
            large={true}
            buttonStyle={styles.button}
            backgroundColor={color()}
            icon={{name: 'cached'}}
            title='LARGE BUTTON WITH ICON' />
        </View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4584F1'
  },
  button: {
    marginTop: 15
  },
})

export default ButtonsGallery;
