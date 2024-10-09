import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackParamsList } from '../types'
import Home from '../../screens/Home'
import Forms from '../../screens/Forms'

const {Screen, Navigator} = createStackNavigator<StackParamsList>()

const StackView = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='Forms' component={Forms} />
    </Navigator>
  )
}

export default StackView