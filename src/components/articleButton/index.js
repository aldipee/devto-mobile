import React from 'react';
import { View } from 'react-native';
import BookmarkButton from 'components/bookmarkButton';
import ShareButton from 'components/shareButton';

const ArticleButton = (props) => {
    console.log(props, 'BookmarkButton')
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <ShareButton />
            <BookmarkButton />
        </View>
    );
}



export default ArticleButton;
