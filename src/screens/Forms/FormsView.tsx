import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Input from '../../components/Input'
import FormsController from './FormsController'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../../components/Header'

const FormsView = () => {

  const insets = useSafeAreaInsets()
  const controller = FormsController()

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Header />
      <View style={styles.containerInputs}>
        <Input control={controller.control} label='Name' placeholder='Name' name='name' errorMessage={controller.errors.name} />
        <Input control={controller.control} label='Telefone' placeholder='Phone' name='phone' errorMessage={controller.errors.phone} />
        <Input control={controller.control} label='Localização' placeholder='Address' multiline height={100} name='address' errorMessage={controller.errors.address} />
        <Input control={controller.control} label='Observação' placeholder='Observation' multiline height={100} name='observation' errorMessage={controller.errors.observation} />
      </View>
      <TouchableOpacity onPress={controller.onSubmit} style={styles.buttonSubmit}>
        <Text style={styles.textSubmit}>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormsView