import React from 'react'
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Import all screens
import Home from './index'

const TopBar = createCompatNavigatorFactory(createMaterialTopTabNavigator)({
  Terbaru : { screen : Home },
  Rilis : { screen : Home },
  Blog : { screen : Home }
},{
    tabBarOptions : {
        labelStyle : {
            fontWeight : 'bold',
        },
        indicatorStyle : {
            backgroundColor : '#14B4AD',
            height : 4
        },
        style : {
            height : 40
        },
        activeTintColor : '#14B4AD',
        inactiveTintColor : '#969696'
    }
})
export default TopBar
