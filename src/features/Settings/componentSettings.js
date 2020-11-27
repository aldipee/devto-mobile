

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from 'styles/theme';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import HeadlineCarousel from 'components/newsCarousel'
import ListNews from 'components/ListNews'
const App = (props) => {

    const theme = useSelector((state) => state.globalReducer.theme)
    const onChangeTheme = () => {
        props.switchTheme(theme.mode === 'dark' ? lightTheme : darkTheme)
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.body, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]}>
                    <View>
                        <Text style={{ color: theme.PRIMARY_TEXT_COLOR }}>Pengaturan</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <TouchableOpacity onPress={onChangeTheme}>
                            <Text style={{ color: theme.PRIMARY_TEXT_COLOR }}>{theme.mode === 'dark' ? 'Light Theme' : 'Dark Theme'}</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: '#fff',
    },
    sectionContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
        height: '100%'
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
