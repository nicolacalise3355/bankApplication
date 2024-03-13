import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { MessageBoxStyle } from './style'

export const MessageBox = () => {
  return (
    <View style={MessageBoxStyle.container}>
      <Pressable>
        <View style={MessageBoxStyle.containerClose}>
          <Text style={MessageBoxStyle.close}>X</Text>
        </View>
      </Pressable>
      <View style={MessageBoxStyle.containerText}>
        <Text>Message</Text>
      </View>
    </View>
  )
}
