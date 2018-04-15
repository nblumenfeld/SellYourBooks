import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bookUpdate } from '../../actions';


class CameraComponent extends Component{

    takePicture(){
        this.camera.capture()
        .then((data) => {
            this.props.bookUpdate({prop:'picture', value:data.mediaUri});
            Actions.pop();
        })
        .catch(err => console.error(err));
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
      backgroundColor: '#2E86AB',
      borderRadius: 10,
      color: 'white',
      padding: 15,
      margin: 45
    }
  };

  const mapStateToProps = (state) => {
      const { picture } = state.post;

      return { picture };
  }

export default connect(mapStateToProps,{bookUpdate})(CameraComponent);