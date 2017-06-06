/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native'
import {
  Tabs,
  Tab
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonsGallery from './elements/ButtonsGallery';
import ComponentsGallery from './elements/ComponentsGallery';
import ListGallery from './elements/ListGallery';

let styles = {};

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

class Components extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedTab: 'home'
    };
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    });
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <Tabs hidesTabTouch>
        <Tab
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'BUTTONS' : null}
          renderIcon={() => <Icon color={'#0f0f0f'} name='whatshot' size={26} />}
          renderSelectedIcon={() => <Icon color={color('blue')} name='whatshot' size={26} />}
          onPress={() => this.changeTab('home')}>
          <ButtonsGallery />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'components' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'components'}
          title={selectedTab === 'components' ? 'COMPONENTS' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={color('grey')} name='invert-colors' size={26} />}
          renderSelectedIcon={() => <Icon color={color('blue')} name='invert-colors' size={26} />}
          onPress={() => this.changeTab('components')}>
          <ComponentsGallery />
        </Tab>
        <Tab
          tabStyle={selectedTab !== 'list' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'list'}
          title={selectedTab === 'list' ? 'LISTS' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={color('grey')} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={color('blue')} name='contacts' size={26} />}
          onPress={() => this.changeTab('list')}>
          <ListGallery />
        </Tab>
      </Tabs>
    );
  }
}

styles = StyleSheet.create({
  titleSelected: {
    color: '#4584F1',
    fontWeight: 'bold'
  }
});

export default Components;
