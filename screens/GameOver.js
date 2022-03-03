import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import DefaultStyles from '../constants/default-styles';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

function GameOver(props) {
  return (
    <View style={styles.screen}>
        <BodyText>The Game is Over</BodyText>
        <View style={DefaultStyles.imageContainer}>
          <Image 
            source={require('../assets/favicon.png')}
            //source={{uri: '..some url here'}}
            style={DefaultStyles.image}
          />
        </View>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text> 
          rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 15,
    },
    highlight: {
      color: colors.primary,
      fontFamily: 'open-sans-bold',
    }
})
export default GameOver