/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import Gallery from 'react-native-image-gallery';
import ModalExample from './components/modal/index.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    display: false,
    position: 1,
    dataSource: [
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-1.jpg' }},
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-2.jpg' }},
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-3.jpg' }},
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-4.jpg' }},
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-5.jpg' }},
      {source: { uri: 'http://lorempixel.com/output/cats-q-c-640-480-6.jpg' }}
    ],
  }

  toggleModal = () => {
    this.setState({
      display: !this.state.display
    });
  }

  render() {

    return (
      <View style={styles.container}>
        
        <Gallery
          initialPage={this.state.position}
          style={{ flex: 1, backgroundColor: 'black' }}
          images={this.state.dataSource}
          onPageSelected={(index) => { this.setState({ position: index}) }}
          onSingleTapConfirmed={() => this.toggleModal() }
        />

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
});
