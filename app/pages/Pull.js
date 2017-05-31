/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { Text } from 'react-native';

class Pull extends React.Component {
  render() {
    return(
        <View>
          <Text>Pull</Text>
        </View>
    );
  }
}

export default Pull;
