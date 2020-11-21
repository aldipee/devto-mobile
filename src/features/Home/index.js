

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HeadlineCarousel from '../../components/newsCarousel'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
   
     
     
        <ScrollView style={{flex : 1}}>
     
          
          
    
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <HeadlineCarousel containerStyle={{
                height : 200,
                width  :'100%',
                flex : 1
              }} />

              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                MEONGGGGGGGGGGG
              </Text>
            </View>
           
            <LearnMoreLinks />
          </View> 
        </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex : 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
