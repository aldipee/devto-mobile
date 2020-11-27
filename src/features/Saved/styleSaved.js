import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import {MainResponsiveFontSize  } from 'styles/style'

export const iconSize = moderateScale(21)

export const Styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    headerContainer : {
        paddingHorizontal : moderateScale(20),
        paddingBottom : moderateScale(10),
        paddingTop : moderateScale(20)
    },
    headerText : {
        fontSize : MainResponsiveFontSize.font21,
        fontFamily : "Lato-Bold",
        letterSpacing : 0.7
    },
    sectionContainer : {
        paddingHorizontal : moderateScale(16)
    },
    menuContainer : {
        flexDirection : 'row',
        paddingVertical  : moderateScale(13),
        alignItems : 'center',
        justifyContent : 'space-between'
    },  
    textMenu : {
        marginLeft : moderateScale(16),
        fontSize : MainResponsiveFontSize.font15,
        fontFamily : "Lato-Bold",
        letterSpacing : 0.7
    },
    textDesc : {
        fontSize : MainResponsiveFontSize.font12,
        marginLeft : moderateScale(3),
        letterSpacing : 0,
        fontFamily : "Lato-Regular"
    },
    body: {
        backgroundColor: '#fff',
    },
});