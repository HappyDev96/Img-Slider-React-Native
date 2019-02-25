import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, Alert, Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

class ModalExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  renderPage(image, index) {
      return (
          <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
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
         <Modal visible={ this.props.display } animationType = "slide" 
         onRequestClose={ () => { this.props.handleClose() }} >
          <View style={{ flex:1}}>
            <Swiper 
              index={this.props.position}
              style={styles.wrapper} 
              showsButtons={true} 
              renderPagination={this.renderPagination}
            >
              {this.props.data.map((image, index) => this.renderPage(image, index))}
            </Swiper>

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
   },
   wrapper: {
    flex: 1, backgroundColor: 'black'
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
})