/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


class App extends Component {

  state = {};

  //lifecycle methods
  componentWillMount() {
  }

  renderContent() {
    return (
      <Button
        raised
        icon={{name: 'home', size: 32}}
        buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        title={`Welcome to\nReact Native Elements`} />
    );
  }

  render() {
    return (
      <View style= { styles.spinnerViewStyles }>
        { this.renderContent() }
        <View>
          <Icon
            name='g-translate'
            color='#00aced' />
        </View>
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
