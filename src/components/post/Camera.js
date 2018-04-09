import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { View, Text } from 'react-native';

class CameraComponent extends Component{
    takePicture() {
        const options = {}
        this.camera.capture({metadata: options}).then((data) => {
            console.log('image captured')
            console.log(data)
        }).catch((error) => {
          console.log(error)
        })
      }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    style={styles.view}
                    ref={ref => this.camera = ref}
                    aspect={Camera.constants.Aspect.fill}
                    >
                    <Text
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        Take Picture
                    </Text>
                </Camera>
               
            </View>
        )
    }
}

const styles ={
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    view: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: 'steelblue',
      borderRadius: 10,
      color: 'white',
      padding: 15,
      margin: 45
    }
  };

export default CameraComponent;