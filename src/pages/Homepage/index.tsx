import React, { useEffect } from 'react'
import { Text, Pressable, View } from 'react-native'
import { HomepageStyle } from './style'
import useHttpSimulation from '../../hooks/useHttpSimulation'
import { Endpoints_uri } from '../../costants/Endpoints'
import { CardBox, CardBoxEmpty } from '../../atoms'
import { ICardInfo } from '../../interfaces/models/card'
import { TransactionsList, TransactionsListLoader } from '../../components'
import { ITransaction } from '../../interfaces/models/transaction'

//used as placeholder template, we assume we don't take this from api response.
const CARD_ASSET_SAMPLE = 'https://pearl.cdn.cornercard.ch/static/cop-ch/cross/images/cards/big/MASTERCARD_GOLD_CORNER.PNG';

export const Homepage = () => {

  const { data: messages, isLoading: isLoadingMessages, error: messageError } = useHttpSimulation(Endpoints_uri.inbox);
  const { data: cardData, isLoading: isLoadingCardData, error: cardDataError } = useHttpSimulation(Endpoints_uri.cardInfo);
  const { data: transactions, isLoading: isLoadingTransactions, error: transactionsError } = useHttpSimulation(Endpoints_uri.transactions, 2000);

  const showAllTransactions = () => {
    console.log(transactions)
  }

  return (
    <View style={HomepageStyle.container}>
        { isLoadingCardData && <CardBoxEmpty uri={CARD_ASSET_SAMPLE} />}
        { !isLoadingCardData && cardData && 
          <CardBox 
            uri={(cardData as ICardInfo).image} 
            digits={(cardData as ICardInfo).cardNumber.toString().slice(-4)} 
            expenses={`${(cardData as ICardInfo).expenses.amount} ${(cardData as ICardInfo).expenses.currency}`} 
            availability={`${(cardData as ICardInfo).availability.amount} ${(cardData as ICardInfo).availability.currency}`}
          />
        }
        <Pressable onPress={showAllTransactions}>
          <Text>Show All</Text>
        </Pressable>
        { isLoadingTransactions && <TransactionsListLoader />}
        { !isLoadingTransactions && transactions && 
          <TransactionsList 
            transactions={(transactions as ITransaction[]).slice(0,3)}
          />
        }
    </View>
  )
}
