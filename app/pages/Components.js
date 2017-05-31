/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import { Text } from 'react-native';

class Components extends React.Component {
  render() {
    return(
        <View>
          <Text>Components</Text>
        </View>
    );
  }
}

export default Components;
