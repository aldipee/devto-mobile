import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

// Import all screens
import Home from '../features/Home/routerHome'

const BottomBar = createCompatNavigatorFactory(createBottomTabNavigator)({
  Home : {
    screen : Home, 

    activeColor : '#181A1B',
    navigationOptions : ({navigation}) => ({
      shifting : true,
      labeled : true,
      tabBarLabel : 'Home',
      tabBarIcon : ({color, size}) =>(
        <Icon name='home-outline' size={size} color={color}  />
      ),
    })
  },
  Media : {
    screen : Home,
    navigationOptions : ({navigation}) =>({
      barStyle : {
        backgroundColor : 'red'
      },
      shifting : true,
    labeled : true,
    tabBarIcon : ({color, size}) =>(
      <Icon name='images-outline' size={size} color={color}  />
    ),
    })
  },
  Saved : {
    screen : Home,
    navigationOptions : ({navigation}) => ({
      shifting : true,
      tabBarIcon : ({color, size}) =>(
        <Icon name='ios-bookmark-outline' size={size} color={color}  />
      ),
    })
  },
  Settings : {
    screen : Home,
    navigationOptions : ({navigation}) => ({
      shifting : true,
      tabBarIcon : ({color, size}) =>(
        <Icon name='ios-settings-outline' size={size} color={color}  />
      ),
    })
  },
}, {
  tabBarOptions : {
    labelStyle : {
      fontWeight : 'bold'
    },
    activeTintColor : '#14B4AD',
    inactiveTintColor : '#969696'
  }
})


export const RootNavigator = createCompatNavigatorFactory(createStackNavigator)(
    {
      Main: {
        screen: BottomBar,
        navigationOptions: ({ navigation }) => ({
          activeColor : '#181A1B',
          headerShown : false,
          labeled : true,
        }),
      },
    },
    {
      mode: 'modal',
      initialRouteName: 'Main',
      cardStyle: {
        opacity: 1,
        backgroundColor: 'transparent',
      },
    }
  );

class Navigator extends React.Component {
    componentDidMount(){
        console.log("ASDAd")
    }
    render() {
      return (
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      
      );
    }
  }
export default Navigator;