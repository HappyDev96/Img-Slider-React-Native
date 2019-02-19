/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
// import ModalExample from './components/modal/index.js'
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
      {
        url: 'http://localhost:8081/imgs/1.png',
      }, {
        url: 'http://localhost:8081/imgs/2.png',
      }, {
        url: 'http://localhost:8081/imgs/3.png',
      },
    ],
  }

  // triggerModal() {
  //   this.setState( { display: true } );
  // }

  toggleModal = () => {
    this.setState({
      display: !this.state.display
    });
  }

  // onClose() {
  //   this.setState({ display: false } );
  // }

  render() {
    return (
      <View style={styles.container}>
        <Slideshow 
          dataSource={this.state.dataSource}
          onPositionChanged={ position => this.setState({ position: position }) }
          onPress = { () => this.toggleModal() } />
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
