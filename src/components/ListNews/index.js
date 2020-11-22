

import React from 'react';
import { View, FlatList } from 'react-native';
import { NewsItemLoading } from 'components/newsItem'
import { connect } from 'react-redux'
import DATA from '../../api/data.json'
import NewsItem from '../newsItem'
import { Styles } from './styleListNews'

const ListNews = ({loading, data}) => {
  const renderItem = ({ item }) => (<NewsItem item={item} />)
  if(loading){
    const placeHolder = Array.from({ length: 5 }, (v, k) => k)
    return (
        <View style={Styles.container}>
              {placeHolder.map((data,index) => (<NewsItemLoading key={`index-${index}`}/>))}
        </View>
    );
  }
  return (
      <View style={Styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />
      </View>
  );
};


const mapStateToPros = ({homeReducer}) => ({
    data : homeReducer.news
})


export default connect(mapStateToPros, {})(ListNews);
