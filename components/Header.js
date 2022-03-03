import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'
import DefaultStyles from '../constants/default-styles'

function Header(props) {
  return (
    <View style={styles.header}>
        <Text style={[styles.headerTitle, DefaultStyles.customFont]}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default Header