import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RoutesController from './RoutesController'
import Stack from './Stack'

const RoutesView = () => {

  const controller = RoutesController()

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}

export default RoutesView