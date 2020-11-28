import React from 'react';
import { View , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Styles, iconSize } from './styleShareButton';
import { onShare } from 'utilities/onShare'

const ShareButton = ({theme, ...props}) => {
    return (
        <TouchableOpacity onPress={() => onShare(props.url)}>
            <View>
                <Icon name='share-social-outline' size={iconSize} color={theme.PRIMARY_ICON_COLOR} />
            </View>
        </TouchableOpacity>
    );
}



export default ShareButton;
