import { StyleSheet } from "react-native";

export const MessageBoxStyle = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        gap: 2,
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 16,
        padding: 8
    },
    containerClose: {
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    simpleText: {
        fontSize: 18,
        fontWeight: '600' 
    },
    close: {
        fontSize: 18,
        fontWeight: '700'
    },
    containerText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});