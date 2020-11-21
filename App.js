
import React from 'react';
import {  LogBox } from 'react-native'
import Root from './Root'
const App = () => {
  LogBox.ignoreAllLogs(true)
  return (
        <Root />
  );
};


export default App;
