import {scale, moderateScale} from 'react-native-size-matters';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {MainResponsiveFontSize } from 'GlobalStyles'


export const Styles = StyleSheet.create({
  
  containerItem : {
    paddingHorizontal : moderateScale(10),
    paddingVertical : moderateScale(8),
    marginVertical : moderateScale(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : '#fff'
  },
  imageStyle : {borderRadius : moderateScale(16), width: '100%', height: '100%' },
  itemTitle : {
    fontWeight : 'bold',
    fontSize : MainResponsiveFontSize.font15,
    flex : 1,
    justifyContent : 'flex-start',
    alignContent : 'flex-start'
  },
  itemDate : {
    fontSize : MainResponsiveFontSize.font10,
    color : '#999999',
    marginBottom : moderateScale(4)
  },
  itemCategory : {
    fontSize : MainResponsiveFontSize.font10,
    fontWeight : 'bold',
    color : '#fff',
    width : '50%',
    textAlign : 'center',
    padding : moderateScale(1),
    borderRadius : moderateScale(4),
    backgroundColor : '#14B4AD'
  }
})