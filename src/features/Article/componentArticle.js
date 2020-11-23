

import React, { useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Dimensions,
    Image,
    Text
} from 'react-native';
import DATA from 'api/single.json';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import ProgressiveImage from 'components/progressiveImage';
import HTML from 'react-native-render-html';
import momentWithLocales from 'moment/min/moment-with-locales';
const w = Dimensions.get('window')
const App = (props) => {

    const formatTime = (dateTime, currentFormat, toFormat) => {
        const date = momentWithLocales(dateTime, currentFormat);
        date.locale('id');
        return date.format(toFormat);
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }}>
                {/* Big Image */}
                <View style={{ height: 250, width: '100%' }}>
                    <ProgressiveImage resizeMode="cover" thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
                        source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg` }}
                        style={{ height: '100%', width: '100%' }} />
                </View>
                {/* End Of big Image */}

                {/* Render Title */}
                <View style={{ paddingHorizontal: 20, backgroundColor: '#fff', paddingTop: 20, paddingBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{DATA.post.title}</Text>
                    <Text style={{ fontSize: 14, color: '#878787' }}>{`${DATA.post.date && formatTime(DATA.post.date, 'YYYY-MM-DD HH:mm:ss', 'dddd DD MMMM YYYY')} | ${DATA.post.categories[0].title}`}</Text>
                </View>

                {/* Render HTML */}
                <View style={{ paddingHorizontal: 20, backgroundColor: '#fff', marginTop: 10 }}>
                    <HTML html={DATA.post.content} imagesMaxWidth={Dimensions.get('window').width} tagsStyles={{
                        p: {
                            color: '#000',
                            fontSize: 17,
                            lineHeight: 25,
                            marginTop: 25,
                        },
                        img: {
                            width: 300
                        }
                    }} />
                </View>
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: '#ebebeb',
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
    carouselContainer: {
        height: 230,
        width: '100%',
        flex: 1
    },
    // Start of Container Item Styles
    containerItem: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imageStyle: { borderRadius: 16, width: '100%', height: '100%' },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    itemDate: {
        fontSize: 10,
        color: '#999999',
        marginBottom: 10
    }
});

export default App;
