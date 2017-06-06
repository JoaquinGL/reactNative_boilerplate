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
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import {
  ButtonGroup,
  Card,
  Grid,
  Col,
  Row,
  Slider,
  Tile
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

const users = [
  {
    name: 'user1',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'user2',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'
  },
  {
    name: 'user3',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
  }
];

class ComponentsGallery extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedIndex: 0,
      value: 5
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }

  render() {
    const buttons = ['Button1', 'Button2', 'Button3'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.hero}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>Components</Text>
        </View>
        <View>
          <ButtonGroup
            textStyle={{fontSize: 13}}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons} />
        </View>
        <View>

          <Card
            title='CARD WITH DIVIDER'>
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode='cover'
                      source={{uri: u.avatar}} />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                )
              })
            }
          </Card>

          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='GRID LAYOUT'>
            <Grid containerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10}}>
              <Col size={0.25}>
                <TouchableHighlight onPress={() => console.log("hello")}>
                  <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}} style={{height: 50, width: 50, borderRadius: 25,}}/>
                </TouchableHighlight>
              </Col>
              <Col>
                <Row size={0.75}>
                  <Text style={{fontSize: 22}}>User 1</Text>
                </Row>
                <Row>
                  <Text style={{color: 'grey'}}>Freelance developer</Text>
                </Row>
              </Col>
            </Grid>
          </Card>

          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='SLIDERS'>
            <View>
              <Slider
                value={this.state.value}
                minimumValue={0}
                maximumValue={20}
                step={1}
                minimumTrackTintColor= {color('cyan')}
                thumbTintColor= {color('blue')}
                onValueChange={(value) => this.setState({value})} />
              <Text>Value: {this.state.value}</Text>
            </View>
          </Card>

          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='TILES'>
            <View style={{paddingTop: 20}}>
                <Tile
                  imageSrc={{uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'}}
                  icon={{name: 'heart', type: 'font-awesome', size: 60, color: 'red'}}
                  featured
                  activeOpacity={0.8}
                  onPress={() => { "Tile pressed" }}
                  width={310}
                />
            </View>
          </Card>

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
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
})

export default ComponentsGallery;
