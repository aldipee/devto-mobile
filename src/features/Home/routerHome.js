import React from 'react'
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import store from 'redux/store';

const { globalReducer: { theme } } = store.getState()
// Import all screens
import Home from './containerHome'

const TopBar = createCompatNavigatorFactory(createMaterialTopTabNavigator)({
    Terbaru: { screen: Home },
    Rilis: { screen: Home },
    Blog: { screen: Home }
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: 'bold',
        },
        indicatorStyle: {
            backgroundColor: theme.SEMANTIC_COLOR,
            height: 4
        },
        style: {
            height: 40,
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR
        },
        activeTintColor: theme.SEMANTIC_COLOR,
        inactiveTintColor: '#969696'
    }
})
export default TopBar
