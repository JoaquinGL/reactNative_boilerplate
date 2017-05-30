/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  state = {};

  //lifecycle methods
  componentWillMount() {
  }

  renderContent() {
    return (
      <Text>
        Hello World
      </Text>
    );
  }

  render() {
    return (
      <View style= { styles.spinnerViewStyles }>
        { this.renderContent() }
      </View>
    );
  }

}

const styles = {
  spinnerViewStyles: {
    padding: 40
  }
};

export default App;
