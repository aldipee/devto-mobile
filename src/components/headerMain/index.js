

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ProgressiveImage from '../progressiveImage';
import momentWithLocales from 'moment/min/moment-with-locales';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderMain = ({item, ...props}) => {

  return (
    <React.Fragment>
        <View style={{backgroundColor : 'red', height : 100}}>
            <Text>Header</Text>
        </View>
    </React.Fragment>
  );
};


export default HeaderMain;
