import React from 'react'
import { View, ScrollView } from 'react-native'
import { TransactionBox } from '../../atoms'
import { TransactionsListStyle } from './style'
import { TransactionsListProps } from '../../interfaces/ComponentsInterfaces'

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
