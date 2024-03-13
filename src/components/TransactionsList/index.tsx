import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TransactionsListProps } from '../../interfaces/AtomsInterfaces'
import { TransactionBox } from '../../atoms'
import { TransactionsListStyle } from './style'

export const TransactionsList = ({ transactions }: TransactionsListProps) => {
  return (
    <ScrollView style={TransactionsListStyle.containerScroll}>
      <View style={TransactionsListStyle.container}>
        {
          transactions.map((t) => {
            return(
              <TransactionBox transaction={t} key={t.id}/>
            )
          })
        }
      </View>
    </ScrollView>
  )
}
