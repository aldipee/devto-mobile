import { scale, moderateScale } from 'react-native-size-matters';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { MainResponsiveFontSize } from 'GlobalStyles'


export const Styles = StyleSheet.create({

  containerItem: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(8),
    // marginVertical : moderateScale(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: { borderRadius: moderateScale(16), width: '100%', height: '100%' },
  itemTitle: {
    fontSize: MainResponsiveFontSize.font15,
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily : 'Lato-Bold',
    lineHeight : moderateScale(20),
    letterSpacing : 0.5,
  },
  itemDate: {
    fontSize: MainResponsiveFontSize.font10,
    color: '#999999',
    marginBottom: moderateScale(7),
    marginTop : moderateScale(10)
  },
  itemCategory: {
    fontSize: MainResponsiveFontSize.font10,
    fontWeight: 'bold',
    color: '#fff',
    width: '50%',
    textAlign: 'center',
    padding: moderateScale(1),
    borderRadius: moderateScale(4),
    backgroundColor: '#14B4AD'
  },
  seperator: { backgroundColor: '#ebebeb', height: 1.3, width: '95%', flex: 1, alignSelf: 'center' }
})