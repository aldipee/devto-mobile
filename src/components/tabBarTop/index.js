import React from 'react'
import { useSelector } from 'react-redux'
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs'

const TabBarTop = (props) => {
  const theme = useSelector((state) => state.globalReducer.theme)
  return (
    <>
      <MaterialTopTabBar {...props} indicatorStyle={{
        backgroundColor: theme.SEMANTIC_COLOR,
        height: 4
      }} activeTintColor={theme.SEMANTIC_COLOR} style={{
        height: 40,
        backgroundColor: theme.SECONDARY_BACKROUND_COLOR
      }} />
    </>
  )
}

export default TabBarTop