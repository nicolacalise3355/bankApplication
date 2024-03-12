import { ITransaction } from "./models/transaction";

export interface CardBoxEmptyProp {
    uri: string;
}

export interface CardBoxProp {
    uri: string;
    availability: string; 
    expenses: string; 
    digits: string;
}

export interface TransactionsListProps {
    transactions: ITransaction[];
}

export interface TransactionBoxProps{
    transaction: ITransaction;
}