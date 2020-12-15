import React, {useEffect} from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import HeadlineCarousel from 'components/newsCarousel';
import ListNews from 'components/ListNews';
import {styles} from './styleHome';

const Home = (props) => {
  useEffect(() => {
    props.requestRecentNews('recent');
  }, []);
  const theme = useSelector((state) => state.globalReducer.theme);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={{flex: 1, backgroundColor: theme.SECONDARY_BACKROUND_COLOR}}>
        <View
          style={[
            styles.body,
            {backgroundColor: theme.SECONDARY_BACKROUND_COLOR},
          ]}>
          <View style={styles.sectionContainer}>
            <HeadlineCarousel
              containerStyle={styles.carouselContainer}
              loading={props.loading}
              placeHolderColor={theme.PLACEHOLDER_COLOR}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: theme.SECONDARY_BACKROUND_COLOR,
            marginTop: 10,
          }}>
          <ListNews
            newsCategory="recent"
            loading={props.loading}
            placeHolderColor={theme.PLACEHOLDER_COLOR}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
