import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import ProgressiveImage from '../progressiveImage';
import momentWithLocales from 'moment/min/moment-with-locales';
import Icon from 'react-native-vector-icons/Ionicons';

import {NewsItemLoading} from './subComponent/itemLoading/compItemLoading';
import {Styles} from './styleNewsItem';
import {useNavigation} from '@react-navigation/native';
import {onShare} from 'utilities/onShare';
import {connect, useSelector} from 'react-redux';
import {saveItem, unsavedItem} from 'redux/actions/Global';
const NewsItem = ({item, newsCategory, ...props}) => {
  const formatTime = (dateTime, toFormat) => {
    const date = momentWithLocales(dateTime);
    date.locale('id');
    return `${date.fromNow(true)} yang lalu`;
  };
  const navigation = useNavigation();

  useEffect(() => {}, []);
  const theme = useSelector((state) => state.globalReducer.theme);
  const onPress = (idPost, url, isSaved) => {
    navigation.navigate('Article', {idPost, url, theme, isSaved});
  };

  const onSave = (post) => {
    !post.isSaved ? props.saveItem(post) : props.unsavedItem(post.id);
    ToastAndroid.show(
      `${post.isSaved ? 'Article Saved' : 'Article Unsaved'}`,
      ToastAndroid.SHORT,
    );
  };

  return (
    <React.Fragment>
      <View
        key={`${item.slug}-${item.id}`}
        style={[
          Styles.containerItem,
          {backgroundColor: theme.SECONDARY_BACKROUND_COLOR},
        ]}>
        <View style={Styles.titleWrapper}>
          <TouchableOpacity
            onPress={() => onPress(item.id, item.url, item.isSaved)}>
            <Text style={[Styles.itemTitle, {color: theme.PRIMARY_TEXT_COLOR}]}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <View style={Styles.descriptionWrapper}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={[Styles.author, {color: theme.SECONDARY_TEXT_COLOR}]}>
                {item.user.name}
              </Text>
              <Text
                style={[Styles.itemDate, {color: theme.SECONDARY_TEXT_COLOR}]}>
                {item.published_at &&
                  formatTime(item.published_at, 'dddd, DD MMMM YYYY')}
              </Text>
              {/* <Text style={[Styles.itemCategory, { backgroundColor: theme.SEMANTIC_COLOR }]}>{item.user.name}</Text> */}
            </View>
            <View style={Styles.buttonWrapper}>
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => onShare(item.url)}>
                <Icon
                  name="share-social-outline"
                  size={20}
                  color={theme.PRIMARY_TEXT_COLOR}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSave(item)}>
                <Icon
                  name={item.isSaved ? 'bookmark' : 'bookmark-outline'}
                  size={20}
                  color={theme.PRIMARY_TEXT_COLOR}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.imageWrapper}>
          <ProgressiveImage
            source={{uri: item.cover_image}}
            thumbnailSource={{uri: item.cover_image}}
            style={Styles.imageStyle}
            resizeMode="cover"
          />
        </View>
      </View>
      <View
        style={[Styles.seperator, {backgroundColor: theme.SEPERATOR_COLOR}]}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {saveItem, unsavedItem})(NewsItem);
