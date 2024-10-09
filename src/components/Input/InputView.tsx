import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { InputProps } from './types'
import { styles } from './styles'
import { Controller } from 'react-hook-form'

const InputView = ({ label, placeholder, height, multiline = false, control, name, errorMessage } : InputProps) => {

  return (
    <View style={[styles.container]}>
      {label ? <Text>{label}</Text> : null}
      <Controller 
        control={control} 
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput 
            value={value} 
            onChangeText={onChange} 
            style={[styles.input, height ? { height } : {}]} 
            placeholder={placeholder} 
            multiline={multiline} />
        )}
        name={name}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage.message}</Text> : <View style={styles.error} />}

    </View>
  )
}

export default InputView