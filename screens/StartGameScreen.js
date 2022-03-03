import React, {useState} from 'react'
import { 
    View, Text, StyleSheet, Button, TouchableWithoutFeedback,
    Keyboard, Alert, Image } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/Number'
import Colors from '../constants/colors'
import BodyText from '../components/BodyText'
import DefaultStyles from '../constants/default-styles'
import MainButton from '../components/MainButton'

function StartGameScreen(props) {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!','Number has to be a number between1 and 99', 
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
        </Card>
    }

  return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
            }}
        >
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <BodyText style={styles.bodyText}>Select a Number</BodyText>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad' 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <MainButton onPress={resetInputHandler}>Reset</MainButton>
                    <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
                </View>
            </Card>
            {confirmedOutput}
            <View style={DefaultStyles.imageContainer}>
                <Image 
                    fadeDuration={1000}
                    //source={require('../assets/favicon.png')}
                    source={{uri: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80'}}
                    style={DefaultStyles.image}
                    resizeMode="cover"
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    inputContainer: {
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width: '100%',
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    bodyText: {
        fontSize: 30,
        fontFamily: 'bold',
    }
})

export default StartGameScreen