import React, { Component } from 'react'
import {Image, View, StyleSheet } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
const {Value, timing} = Animated


export class ProgressiveImage extends Component {
    
    // This animated value will be used to change opacity for these image when image is loaded
    thumbnailAnimated = new Value(1);
    imageAnimated = new Value(0);

    // Handler for Thumbnail when loaded set opacity to 1
    handleThumbnailLoaded = () =>{
        const configThumbnailAnimated = {
            duration: 1,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }
        timing(this.thumbnailAnimated, configThumbnailAnimated)
    }
    // Handler for Image when loaded set opacity to 1
    handleImageAnimated = () =>{
        const configImageAnimated = {
            duration: 1,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }
        timing(this.imageAnimated, configImageAnimated).start()
    }

    render() {
        const {
            thumbnailSource,
            source,
            style,
            ...props
          } = this.props;
        return (
            <View style={styles.container}>
                  <Animated.Image
                    {...props}
                    source={thumbnailSource}
                    style={[style, {opacity : this.thumbnailAnimated}]}
                    blurRadius={3}
                    onLoad={this.handleThumbnailLoaded}
                    />
                    <Animated.Image
                    {...props}
                    source={source}
                    style={[styles.imageOverlay, style, {opacity : this.imageAnimated}]}
                    onLoad={this.handleImageAnimated}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: '#e1e4e8',
    },
  });



export default ProgressiveImage
