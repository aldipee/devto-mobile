import React from 'react';
import {View} from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import {Styles} from './styleItemLoading';
export const NewsItemLoading = ({placeHolderColor}) => {
  return (
    <Placeholder
      Animation={Fade}
      Right={(props) => (
        <PlaceholderMedia
          isRound={false}
          style={([props.style], {width: 120, height: 130})}
          color={placeHolderColor}
        />
      )}
      style={Styles.containerItem}>
      <View style={Styles.loadingContainer}>
        <View>
          <PlaceholderLine width={90} color={placeHolderColor} />
          <PlaceholderLine width={90} color={placeHolderColor} />
          <PlaceholderLine width={90} color={placeHolderColor} />
        </View>
        <View>
          <PlaceholderLine
            width={60}
            style={Styles.loadingBottom}
            color={placeHolderColor}
          />
          {/* <PlaceholderLine
            width={40}
            style={{justifyContent: 'flex-end', height: 12, marginBottom: 0}}
            color={placeHolderColor}
          /> */}
        </View>
      </View>
    </Placeholder>
  );
};
