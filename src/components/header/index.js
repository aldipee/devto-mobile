import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import {Header } from '@react-navigation/stack'

const CustomHeader = (props) =>{
    const theme = useSelector((state) => state.globalReducer.theme)
    return(
     <>
        <Header {...props} styleInterpolator={() =>{
            return {
                backgroundStyle : {
                    backgroundColor : 'red'
                },
                titleStyle : {
                    backgroundColor : 'red'
                }

            }
        }} mode={'screen'}/>
     </>
    )
  }

  export default CustomHeader