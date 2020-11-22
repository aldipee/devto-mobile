

import React from 'react';
import { View, FlatList } from 'react-native';
import DATA from '../../api/data.json'
import NewsItem from '../newsItem'
import { Styles } from './styleListNews'

const ListNews = () => {
  const renderItem = ({ item }) => (<NewsItem item={item} />)
  return (
    <>
      <View style={Styles.container}>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />
      </View>
    </>
  );
};


export default ListNews;
