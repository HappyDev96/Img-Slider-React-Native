import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native'
import Slideshow from 'react-native-image-slider-show';

class ModalExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  render() {
      return (
         <Modal visible={ this.props.display } animationType = "slide" 
         onRequestClose={ () => { this.props.handleClose() }} >
          <View style={styles.container}>
            <Text>Hello World!</Text>
            <Text>{ this.props.position} </Text>

            <TouchableHighlight
              onPress={() => {
                this.props.handleClose();
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

            <Slideshow 
            containerStyle={{ width: '100%', height: '100%' }}
            dataSource={this.props.data}
            
            />
          </View>
        </Modal>
      )
  }
}
export default ModalExample;

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      // padding: 100
      width: '100%',
      height: '100%'
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f7021a',
      width: '100%',
      height: '100%'
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})