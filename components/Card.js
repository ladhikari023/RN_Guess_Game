import React from 'react'
import { View, StyleSheet } from 'react-native'

function Card(props) {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        shadowColor: 'grey',
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        elevation: 5, 
        backgroundColor: 'white',
        borderRadius: 10,
    },
})

export default Card