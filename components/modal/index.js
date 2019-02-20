import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Alert} from 'react-native'
import Gallery from 'react-native-image-gallery';

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
            <Gallery
            initialPage={this.props.position}
            style={{ flex: 1, backgroundColor: '#ede3f2' }}
            images={this.props.data}
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