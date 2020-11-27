

import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import { useSelector} from 'react-redux';
import { darkTheme, lightTheme } from 'styles/theme';
import Icon from 'react-native-vector-icons/Ionicons'
import { Styles, iconSize } from './styleSettings'
import Toggle from 'components/toggler'

const Settings = (props) => {

    const theme = useSelector((state) => state.globalReducer.theme)
    const onChangeTheme = () => {
        props.switchTheme(theme.mode === 'dark' ? lightTheme : darkTheme)
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={{ backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }}>
                <View style={[Styles.body, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]}>
                    <View style={Styles.headerContainer}>
                        <Text style={[Styles.headerText, {color: '#8B95A2'}]}>Pengaturan</Text>
                    </View>
                    <View style={Styles.sectionContainer}>
                            {/* Dark Mode */}
                            <View style={Styles.menuContainer}>
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name={theme.mode === 'dark' ? 'sunny-outline' : 'moon-outline' }  size={iconSize} color={theme.PRIMARY_TEXT_COLOR}/>
                                    <View>
                                        <Text style={[Styles.textMenu, { color: theme.PRIMARY_TEXT_COLOR }]}>Dark Mode</Text>
                                        <Text style={[Styles.textDesc,{ color: '#8B95A2'}]}>Enable dark mode for better experince</Text>
                                    </View>
                                   
                                </View>
                                <View> 
                                    <Toggle isOn={theme.mode === 'dark'} width={60} height={32} onChange={onChangeTheme}/>
                                </View>
                           
                            </View>
                            <View style={{backgroundColor : '#8f8f8f', height : 0.5, flex : 1, width : '89%', alignSelf : 'flex-end'}} />
                            {/*  Notification */}
                            <View style={Styles.menuContainer}>
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name={'notifications-outline'}  size={iconSize} color={theme.PRIMARY_TEXT_COLOR}/>
                                    <View>
                                        <Text style={[Styles.textMenu, { color: theme.PRIMARY_TEXT_COLOR }]}>Notification</Text>
                                        <Text style={[Styles.textDesc,{ color: '#8B95A2'}]}>Enable dark mode for better experince</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor : '#8f8f8f', height : 0.5, flex : 1, width : '89%', alignSelf : 'flex-end'}} />
                            <View style={Styles.menuContainer}>
                                <View style={{flexDirection : 'row'}}>
                                    <Icon name={'notifications-outline'}  size={iconSize} color={theme.PRIMARY_TEXT_COLOR}/>
                                    <View>
                                        <Text style={[Styles.textMenu, { color: theme.PRIMARY_TEXT_COLOR }]}>Notification</Text>
                                        <Text style={[Styles.textDesc,{ color: '#8B95A2'}]}>Enable dark mode for better experince</Text>
                                    </View>
                                </View>
                            </View>
                    </View>
                </View>

            </ScrollView>
        </>
    );
};



export default Settings;
