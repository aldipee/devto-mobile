

import React from 'react';
import { View, FlatList } from 'react-native';
import { NewsItemLoading } from 'components/newsItem'
import { connect } from 'react-redux'
import NewsItem from '../newsItem'
import { Styles } from './styleListNews'

const ListNews = ({loading, data, saved,...props}) => {
  const renderItem = ({ item }) => (<NewsItem item={item} />)
  if(loading){
    const placeHolder = Array.from({ length: 5 }, (v, k) => k)
    return (
        <View style={Styles.container}>
              {placeHolder.map((data,index) => (<NewsItemLoading key={`index-${index}`} placeHolderColor={props.placeHolderColor}/>))}
        </View>
    );
  }
  return (
      <View style={Styles.container}>
            <FlatList data={saved ? saved : data} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />
      </View>
  );
};


const mapStateToPros = ({homeReducer}) => ({
    data : homeReducer.news
})


export default connect(mapStateToPros, {})(ListNews);
