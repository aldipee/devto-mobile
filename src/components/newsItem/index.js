

import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import ProgressiveImage from '../progressiveImage';
import momentWithLocales from 'moment/min/moment-with-locales';
import Icon from 'react-native-vector-icons/Ionicons'
import { Styles } from './styleNewsItem'
import { useNavigation } from '@react-navigation/native';
import { onShare } from 'utilities/onShare'

const NewsItem = ({ item, ...props }) => {
  const formatTime = (dateTime, currentFormat, toFormat) => {
    const date = momentWithLocales(dateTime, currentFormat);
    date.locale('id');
    return date.format(toFormat);
  }
  const navigation = useNavigation();

  useEffect(() => {
  }, [])

  const onPress = (idPost, url) => {
    navigation.navigate('Article', {idPost, url})
  }


  return (
    <React.Fragment>
      <View key={`${item.title}-${item.id}`} style={Styles.containerItem}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <TouchableOpacity onPress={() => onPress(item.id, item.url)}>
            <Text style={Styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={Styles.itemDate}>{item.modified && formatTime(item.modified, 'YYYY-MM-DD HH:mm:ss', 'dddd, DD MMMM YYYY')}</Text>
              <Text style={Styles.itemCategory}>{item.categories[0].title}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity style={{ marginRight: 10 }} onPress={() => onShare(item.url)}>
                <Icon name='share-social-outline' size={20} color={'#737373'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name='bookmark-outline' size={20} color={'#737373'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {item.attachments.length !== 0 && (
          <View style={{ height: 130, width: 120, marginLeft: 20 }}>
            <ProgressiveImage thumbnailSource={{ uri: item.attachments[0].images["post-thumbnail"].url }} source={{ uri: item.attachments[0].images.medium.url }} style={Styles.imageStyle} resizeMode="cover" />
          </View>
        )}
      </View>
    </React.Fragment >
  );
};


export const NewsItemLoading = () => {


  return (
    <Placeholder
      Animation={Fade}
      Right={props => (
        <PlaceholderMedia isRound={false} style={[props.style], { width: 120, height: 130 }} />
      )}
      style={Styles.containerItem}
    >
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <View >
          <PlaceholderLine width={90} />
          <PlaceholderLine width={90} />
          <PlaceholderLine width={90} />
        </View>
        <View >
          <PlaceholderLine width={60} style={{ justifyContent: 'flex-end', height: 10, marginBottom: 4 }} />
          <PlaceholderLine width={40} style={{ justifyContent: 'flex-end', height: 12, marginBottom: 0 }} />
        </View>

      </View>

    </Placeholder>
  )
}


export default NewsItem;
