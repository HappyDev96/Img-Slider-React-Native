/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, Dimensions, TouchableHighlight} from 'react-native';
import ModalExample from './components/modal/index.js'
import Swiper from 'react-native-swiper';


const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const images = [
    'http://i.imgur.com/XP2BE7q.jpg',
    'http://i.imgur.com/5nltiUd.jpg',
    'http://i.imgur.com/6vOahbP.jpg',
    'http://i.imgur.com/kj5VXtG.jpg'
];

type Props = {};
export default class App extends Component<Props> {

  state = {
    display: false,
    position: 3,
    dataSource: [
        'http://i.imgur.com/XP2BE7q.jpg',
        'http://i.imgur.com/5nltiUd.jpg',
        'http://i.imgur.com/6vOahbP.jpg',
        'http://i.imgur.com/kj5VXtG.jpg'
    ]
  }

  getAttachments = () => {

    let apiEndpoint = 'https://rankss.herokuapp.com/posts/teste/attachments'
    let newAttach = []

    fetch(apiEndpoint , {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then( response => response.json() )
    .then( json => {

      for ( let i = 0; i < json.attachments.length ; i ++ ) {
        let newElem = {
          source: {
            uri: json.attachments[i].image.url
          }
        }
        newAttach.push(newElem)
      }
      this.setState({ dataSource: [
            'http://i.imgur.com/XP2BE7q.jpg',
            'http://i.imgur.com/5nltiUd.jpg',
            'http://i.imgur.com/6vOahbP.jpg',
            'http://i.imgur.com/kj5VXtG.jpg'
        ]
      })
    })
    
  }

  toggleModal = () => {
    this.setState({
      display: !this.state.display
    });
  }

  renderPage(image, index) {
      return (
          <View key={index}>
              <TouchableHighlight onPress={this.toggleModal}>
                  <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
              </TouchableHighlight>
          </View>
      );
  }

  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Swiper 
          style={{ flex: 1, backgroundColor: 'black' }}
          index={this.state.position}
          style={styles.wrapper} 
          showsButtons={true} 
          renderPagination={this.renderPagination}
          onIndexChanged = { (index) => { this.setState({ position: index}) }}
          componentWillReceiveProps = {
            () => {Alert.alert('asdfasdf');}
          }
        >
          {this.state.dataSource.map((image, index) => this.renderPage(image, index))}
        </Swiper>

        <ModalExample
          data = {this.state.dataSource} 
          display={this.state.display}
          position={this.state.position}
          handleClose={this.toggleModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
});
