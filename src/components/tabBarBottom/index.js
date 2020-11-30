import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

const TopBarBottom = (props) => {
   const theme = useSelector((state) => state.globalReducer.theme)
   return (
      <>
         <BottomTabBar {...props} activeTintColor={theme.SEMANTIC_COLOR} style={{ backgroundColor: theme.SECONDARY_BACKROUND_COLOR, borderWidth: 0 }} />
      </>
   )
}

export default TopBarBottom