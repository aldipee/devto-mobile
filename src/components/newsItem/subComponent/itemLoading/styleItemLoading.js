import {scale, moderateScale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {MainResponsiveFontSize} from 'GlobalStyles';

export const Styles = StyleSheet.create({
  containerItem: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loadingBottom: {justifyContent: 'flex-end', height: 10, marginBottom: 4},
  imageStyle: {borderRadius: moderateScale(16), width: '100%', height: '100%'},
  itemTitle: {
    fontSize: MainResponsiveFontSize.font15,
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    fontFamily: 'Lato-Bold',
    lineHeight: moderateScale(20),
    letterSpacing: 0.5,
  },
  imageWrapper: {height: 130, width: 120, marginLeft: 20},
  titleWrapper: {flex: 1, flexDirection: 'column'},
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  descriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemDate: {
    fontSize: MainResponsiveFontSize.font11,
    color: '#999999',
    marginBottom: moderateScale(7),
    fontFamily: 'Lato',
    marginTop: moderateScale(10),
  },
  author: {
    fontSize: MainResponsiveFontSize.font12,
    color: '#999999',
    fontFamily: 'Lato-Bold',
    marginTop: moderateScale(5),
  },
  itemCategory: {
    fontSize: MainResponsiveFontSize.font10,
    fontWeight: 'bold',
    color: '#fff',
    width: '50%',
    textAlign: 'center',
    padding: moderateScale(1),
    borderRadius: moderateScale(4),
    backgroundColor: '#14B4AD',
  },
  seperator: {
    backgroundColor: '#ebebeb',
    height: 1.3,
    width: '95%',
    flex: 1,
    alignSelf: 'center',
  },
});
