

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
const Home = (props) => {
    useEffect(() => {
        props.requestRecentNews('recent')
    }, [])
    const theme = useSelector((state) => state.globalReducer.theme)

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>


                <View style={styles.Contianer}>
                    <View>
                        <Text style={[styles.Header, { color: theme.PRIMARY_TEXT_COLOR }]}>Statistik Covid-19</Text>

                    </View>
                    {/* Dashboard */}

                </View>

                <View style={[styles.DashboardContainer]}>
                    <View style={{ paddingHorizontal: 16, marginBottom: 14, marginTop: 5 }}>
                        <Text style={[styles.HeaderTitle]}>Kasus di Indonesia</Text>
                        <Text style={[styles.HeaderSubTitle]}>Update terakhir 20 November 2020</Text>
                    </View>
                    <View style={[styles.Card, { marginBottom: 10, alignContent: 'center' }]}>
                        <Text style={[styles.Title, { textAlign: 'center', color: theme.SECONDARY_TEXT_COLOR }]}>Total Kasus</Text>
                        <Text style={[styles.Total, { textAlign: 'center', fontSize: 30 }]}>538.883</Text>
                    </View>
                    <View style={{ backgroundColor: '#ebebeb', height: 1.3, width: '80%', flex: 1, alignSelf: 'center' }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={[styles.Card]}>
                            <Text style={[styles.Total]}>1.200</Text>
                            <Text style={[styles.Title]}>Dirawat</Text>
                        </View>
                        <View style={[styles.Card]}>

                            <Text style={[styles.Total]}>8.324</Text>
                            <Text style={[styles.Title]}>Sembuh</Text>
                        </View>
                        <View style={[styles.Card]}>

                            <Text style={[styles.Total]}>974</Text>
                            <Text style={[styles.Title]}>Meninggal</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    Contianer: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    Header: {
        fontSize: 22,
        fontFamily: 'Lato-Bold'
    },
    Total: {
        fontSize: 19,
        letterSpacing: 1,
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        color: '#454545'
    },
    IncreaseNumber: {
        marginTop: 8,
        fontFamily: 'Lato-Bold',
        color: '#A3A3A3'
    },
    Title: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        paddingVertical: 2,
        letterSpacing: 0.5,
        color: '#BABABA',
        textAlign: 'center'
    },
    Card: {
        flex: 1, marginHorizontal: 4, paddingHorizontal: 10, paddingVertical: 15, borderRadius: 5,

    },
    DashboardContainer: {
        backgroundColor: '#fff',
        borderRadius: 6
    },
    HeaderTitle: {
        fontSize: 19,
        fontFamily: 'Lato-Bold',
        paddingVertical: 2,
        letterSpacing: 0.5,
        color: '#0f0f0f',
    },
    HeaderSubTitle: {
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        paddingVertical: 2,
        letterSpacing: 0.5,
        color: '#BABABA',
    }
});

export default Home;
