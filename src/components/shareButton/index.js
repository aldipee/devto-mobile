import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles, iconSize } from './styleShareButton';

const ShareButton = (props) => {
    return (
        <View>
            <Icon name='share-social-outline' size={iconSize} color={'#000'} />
        </View>
    );
}



export default ShareButton;
