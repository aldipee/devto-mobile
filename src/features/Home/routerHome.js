import React from 'react'
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabBarTop from 'components/tabBarTop'
import store from 'redux/store';

const { globalReducer: { theme } } = store.getState()
// Import all screens
import Home from './containerHome'
import Blog from './subComponent/blog/containerBlog';
import Rilis from './subComponent/rilis/containeRilis';


const TopBar = createCompatNavigatorFactory(createMaterialTopTabNavigator)({
    Terbaru: { screen: Home },
}, {
    tabBar: (props) => <TabBarTop {...props} />,
    tabBarOptions: {
        labelStyle: {
            fontWeight: 'bold',
        },
        inactiveTintColor: '#969696'
    }
})
export default TopBar

