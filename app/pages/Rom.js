/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { Text } from 'react-native';

class Rom extends React.Component {
  render() {
    return(
        <View>
          <Text>Rom</Text>
        </View>
    );
  }
}

export default Rom;
