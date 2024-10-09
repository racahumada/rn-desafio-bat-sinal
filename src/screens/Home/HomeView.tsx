import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { styles } from './styles'
import HomeController from './HomeController'

import LogoBatman from '../../assets/logoBatman.png'

const HomeView = () => {

  const controller = HomeController()

  return (
    <View style={styles.container}>
      <Image source={LogoBatman} style={styles.image} />
      <TouchableOpacity 
        onPress={controller.handleGoToForm}
        style={styles.button}
      >
        <Text style={styles.textButton}>Ativar o Bat Sinal</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeView