import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles, iconSize } from './styleBookMarkButton';

const BookmarkButton = ({theme, isSaved,  ...props}) => {
    return (
        <View>
            <Icon name={isSaved ?  'bookmark': 'bookmark-outline'} size={iconSize} color={theme.SEMANTIC_COLOR} />
        </View>
    );
}



export default BookmarkButton;
