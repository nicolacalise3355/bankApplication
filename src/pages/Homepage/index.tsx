import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { HomepageStyle } from './style'
import useHttpSimulation from '../../hooks/useHttpSimulation'
import { Endpoints_uri } from '../../costants/Endpoints'

export const Homepage = () => {

  const { data, isLoading, error } = useHttpSimulation(Endpoints_uri.inbox);

  useEffect(() => {
    console.log(data)
  },[data])

  return (
    <View style={HomepageStyle.container}>
        <Text>Homepage</Text>
    </View>
  )
}
