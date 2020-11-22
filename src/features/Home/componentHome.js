

import React, { useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import HeadlineCarousel from 'components/newsCarousel'
import ListNews from 'components/ListNews'
const App = (props) => {
    useEffect(() => {
        props.requestRecentNews()
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <HeadlineCarousel containerStyle={styles.carouselContainer} />
                    </View>
                </View>
                <ListNews />
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
