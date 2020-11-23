import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles, iconSize } from './styleBookMarkButton';

const BookmarkButton = (props) => {
    console.log(props, 'BookmarkButton')
    return (
        <View>
            <Icon name='bookmark-outline' size={iconSize} color={'#000'} />
        </View>
    );
}



export default BookmarkButton;
