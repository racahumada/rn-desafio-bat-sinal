import { View, Text, Image } from 'react-native'
import React from 'react'
import LogoBatman from '../../assets/logoBatman.png'
import { styles } from "./styles"

const HeaderView = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoBatman} style={styles.image} />
      <View style={styles.viewHeader} />
    </View>
  )
}

export default HeaderView