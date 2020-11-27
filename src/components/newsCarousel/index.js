

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Pages } from 'react-native-pages';
import ProgressiveImage from '../progressiveImage'
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";
import LinearGradient from 'react-native-linear-gradient'
const w = Dimensions.get('window')

const Carousel = (props) => (
  <View style={{ borderRadius: 16 }}>
    <ProgressiveImage
      thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
      source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
      style={styles.imageStyle}
      resizeMode="cover"
    />
    <LinearGradient style={styles.headingText} colors={['transparent', 'black']}>
      <Text style={styles.headingTitle}>Sekolah Tatap Muka Dimulai Januari 2021, Peran Bidang Kesehatan Ditingkatkan</Text>
      <Text style={styles.headingDate}>Kamis, 20 November 2020</Text>
    </LinearGradient>
  </View>
)


const App = (props) => {

  if (props.loading) {
    return (

      <Placeholder Animation={Fade}>
        <PlaceholderMedia isRound={false} style={{ width: '100%', height: 230 }} color={props.placeHolderColor} />
      </Placeholder>

    )
  }

  return (
    <View style={[props.containerStyle]}>
      <Pages>
        <Carousel />
        <Carousel />
        <Carousel />
      </Pages>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 13,
    paddingBottom: 20,
    paddingTop: 30
  },
  headingTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25
  },
  imageStyle: { borderRadius: 16, width: '100%', height: '100%' },
  headingDate: {
    color: '#fff',
    paddingTop: 5
  }
})


export default App;
