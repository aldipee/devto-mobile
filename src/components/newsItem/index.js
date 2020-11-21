

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
import { Styles } from './styleNewsItem'

const NewsItem = ({item, ...props}) => {
  const formatTime = (dateTime, currentFormat, toFormat) =>{
    const date = momentWithLocales(dateTime,currentFormat );
    date.locale('id');
    return date.format(toFormat);
  }
  return (
    <React.Fragment>
                <View key={`${item.title}-${item.id}`} style={Styles.containerItem}>
                  <View style={{flex : 1, flexDirection : 'column'}}>
                    <Text style={Styles.itemTitle}>{item.title}</Text>
                    <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center', alignContent : 'center'}}>
                      <View style={{flexDirection : 'column'}}>
                      <Text style={Styles.itemDate}>{item.modified && formatTime(item.modified, 'YYYY-MM-DD HH:mm:ss', 'dddd, DD MMMM YYYY')}</Text>
                      <Text style={Styles.itemCategory}>{item.categories[0].title}</Text>
                      </View>
                      <View style={{flexDirection : 'row', flex : 1, justifyContent  : 'flex-end'}}>
                     <TouchableOpacity style={{marginRight : 10}}>
                        <Icon name='share-social-outline' size={20} color={'#737373'}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name='bookmark-outline' size={20} color={'#737373'}/>
                      </TouchableOpacity>
                    </View>
                    </View>
                  </View>
                  {item.attachments.length &&  (
                    <View style={{height : 130, width : 120, marginLeft : 20}}>
                      <ProgressiveImage thumbnailSource={{uri : item.attachments[0].images["post-thumbnail"].url}} source={{uri : item.attachments[0].images.medium.url}} style={Styles.imageStyle}    resizeMode="cover"/>
                    </View>
                  )}
                </View>
    </React.Fragment>
  );
};


export default NewsItem;
