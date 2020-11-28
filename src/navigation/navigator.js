import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator, TransitionPresets, HeaderBackButton } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import ArticleButton from 'components/articleButton';
import TopBarBottom from 'components/tabBarBottom'

// Import all screens
import Home from 'features/Home/routerHome'
import Saved from 'features/Saved/containerSaved'
import Article from 'features/Article/containerArticle';
import Settings from 'features/Settings/containerSettings';
import Header from 'components/header'
import store from 'redux/store';
// const { globalReducer: { theme } } = store.getState()

store.subscribe(listener)
function select(state) {

  return state.globalReducer.theme
}

function listener() {
  let data = select(store.getState())
  return data
}
const theme = listener()


const BottomBar = createCompatNavigatorFactory(createBottomTabNavigator)({
  Home: {
    screen: Home,

    activeColor: '#181A1B',
    navigationOptions: ({ navigation }) => ({
      shifting: true,
      labeled: true,
      tabBarLabel: 'Berita',
      tabBarIcon: ({ color, size }) => (
        <Icon name='md-newspaper-outline' size={size} color={color} />
      ),
    })
  },
  Media: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      barStyle: {
        backgroundColor: 'red'
      },
      shifting: true,
      labeled: true,
      tabBarIcon: ({ color, size }) => (
        <Icon name='images-outline' size={size} color={color} />
      ),
    })
  },
  Saved: {
    screen: Saved,
    navigationOptions: ({ navigation }) => ({
      shifting: true,
      tabBarLabel: 'Favorit',
      tabBarIcon: ({ color, size }) => (
        <Icon name='ios-bookmark-outline' size={size} color={color} />
      ),
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      shifting: true,
      tabBarLabel: 'Pengaturan',
      tabBarIcon: ({ color, size }) => (
        <Icon name='md-ellipsis-horizontal-outline' size={size} color={color} />
      ),
    })
  },
}, {
  tabBar : (props) => <TopBarBottom {...props} />,
  initialRouteName : 'Saved',
  tabBarOptions: {
    labelStyle: {
      fontWeight: 'bold'
    },
    inactiveTintColor: '#969696'
  },
})

const config = {
  animation: 'spring',
  config: {
    stiffness: 4000,
    damping: 1000,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

export const RootNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    Main: {
      screen: BottomBar,
      navigationOptions: ({ navigation, screenProps }) => {
        return (
          {
            activeColor: '#181A1B',
            headerShown: false,
            headerTitle: "Sembuh Negeriku",
            labeled: true,
          }
        )
      },
    },
    Article: {
      screen: Article,
      navigationOptions: ({ navigation, ...props }) => {
        const theme = navigation.getParam('theme')
        return {
          headerLeft: (props) => {
            console.log(props, 'meonggg')
            return (
              <HeaderBackButton
                {...props}
                tintColor={theme.PRIMARY_ICON_COLOR}
      
              />
            )
          },
          headerRight: (props) => {
            console.log(navigation.getParam('isSaved'), 'isSavedLog')
            return(
              <ArticleButton {...props} url={navigation.getParam('url')} isSaved={navigation.getParam('isSaved')} theme={theme} />
            )
          },
          headerTitle : "",
          headerStyle: {
            backgroundColor: theme.SECONDARY_BACKROUND_COLOR,
            elevation: 0,
            height: 45,
          },
          headerRightContainerStyle: {
            height: '100%',
            width: '25%',
            paddingHorizontal: 10,
          },
        }
      },
    }
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gestureDirection: 'vertical',
      transitionSpec: {
        close: config,
        open: config
      }
    },
    initialRouteName: 'Main',
    cardStyle: {
      opacity: 1,
      backgroundColor: 'transparent',
    },
  }
);


const Navigator = () => {
 

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

  );

}
export default Navigator;