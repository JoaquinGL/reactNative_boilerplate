/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';
import {
  List,
  ListItem,
  Text,
  SearchBar
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

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO'
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer'
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO'
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO'
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer'
  }
];

class ListGallery extends React.Component {
  constructor () {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(list2)
    };
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    );
  }

  render() {
    return (
      <View>
        <View style={styles.hero}>
          <Icon color='white' name='contacts' size={62} />
          <Text style={styles.heading}>Searchbar & List</Text>
        </View>
        <View style={{marginTop: 0, marginBottom: 0}}>
          <SearchBar
            clearIcon
            placeholder='Type Here...' />
        </View>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
          <List style={{marginTop: -5}}>
            {
              list2.map((l, i) => (
                <ListItem
                  rightIcon={{ style: { marginLeft: 20 } }}
                  roundAvatar
                  avatar={{ uri: l.avatar_url }}
                  key={i}
                  onPress={log}
                  title={l.name}
                  subtitle={l.subtitle}
                  containerStyle = {{backgroundColor: '#fff'}}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
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
  mainContainer: {
    marginTop: 0
  }
})

export default ListGallery;
