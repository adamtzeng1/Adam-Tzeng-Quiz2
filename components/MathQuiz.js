import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';



const MathQuiz = ({n}) => {
  const [curValue1,setValue1] = useState(Math.floor(Math.random() * n));
  const [curValue2,setValue2] = useState(Math.floor(Math.random() * n));
  const [finalVal, setFinalVal] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [incorrectAns, setIncorrectAns] = useState(0);
  const [answered, setAnswered] = useState(0);

  //function for incrementing correctly answered and incorrectly answered...it doesn't work
  function incr() {    
    if ((curValue1 * curValue2) == {finalVal}) {
      return(
         () => setCorrectAns(correctAns+1) 
      )
     
    } else {
      return(
        () => setIncorrectAns(incorrectAns+1)
      )

    }
  }

  return (
    <View style = {{flex:1}}>
      <Text style = {{fontSize: 48 , color:'blue'}}>Math Quiz for numbers between 0 and 12</Text>
      <Text style = {{fontSize: 30}}>Calculate the product of the following two numbers: </Text>
      <Text style = {{fontSize: 40}}> {curValue1} * {curValue2} = <TextInput placeholder = '' style = {{fontSize: 40}} onChangeText = {setFinalVal} /></Text>
      <View style = {{flex:0.5 , flexDirection:"row"}}>
      <Button title='Check Answer' onPress = {() => setAnswered(answered+1)} color = 'red'/>
      <Button title = 'Next Question'/>
      </View>
      
      <Text>Correct: {correctAns}</Text>
      <Text>Answered: {answered}</Text>
      
      <Text>Percentage correct: {correctAns} / {answered} </Text>


    </View>
    
   )
}


export default MathQuiz;
