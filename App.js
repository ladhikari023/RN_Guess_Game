import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

import { 
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold 
} from '@expo-google-fonts/dancing-script'

import { useFonts } from 'expo-font';


export default function App() {

  const[userNumber, setUserNumber] = useState();
  const[guessRounds, setGuessRounds] = useState(0);

  let[fontsLoaded, error]=useFonts({
    regular: DancingScript_400Regular,
    medium: DancingScript_500Medium,
    semi_bold: DancingScript_600SemiBold,
    bold: DancingScript_700Bold,
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  if(!fontsLoaded){
    return (
    <AppLoading />
    )
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber}  onGameOver={gameOverHandler}/>
  }
  else if (guessRounds>0){
    content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    }
});
