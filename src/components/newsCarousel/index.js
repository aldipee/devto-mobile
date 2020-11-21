

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Pages } from 'react-native-pages';
import ProgressiveImage from '../progressiveImage'
const App = (props) => {
  const w = Dimensions.get('window')
  return (
    <View style={[props.containerStyle]}>
        <Pages>
            <View style={{borderRadius : 16}}>
              
               {/* <Image style={{
                   height : '100%',
                   width : '100%',
                   borderRadius : 16
               }} source={{uri : 'https://cdn.dribbble.com/users/997070/screenshots/4070247/dripple_copy_54_1x.png'}}/> */}
              <ProgressiveImage
                thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
                source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
                style={{borderRadius : 16, width: '100%', height: '100%' }}
             
                resizeMode="cover"
              />
               <View style={styles.headingText}>
                   <Text style={styles.headingTitle}>Sekolah Tatap Muka Dimulai Januari 2021, Peran Bidang Kesehatan Ditingkatkan</Text>
               </View>
            </View>
            <View style={{  flex : 1, backgroundColor: 'blue'}}>
                <Text>asdajdjand</Text>
            </View>
            <View style={{  flex : 1, backgroundColor: 'yellow'}}>
                <Text>asdajdjand</Text>
            </View>
        </Pages>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText : {
    backgroundColor : 'red', 
    position : 'absolute', 
    bottom : 0, 
    borderBottomRightRadius : 16, 
    borderBottomLeftRadius : 16,
    paddingHorizontal : 13,
    paddingBottom : 14,
    paddingTop : 9
  },
  headingTitle : {
    color : '#fff',
    fontSize : 17,
    fontWeight : 'bold'
  }
})


export default App;
