import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { Button, InputWithLabel } from '@digi-wallet/components';

const CreditCardAddForm = () => {
 const [cardNumber, setCardNumber] = useState('');
 const [expiryDate, setExpiryDate] = useState('');
 const [cvc, setCVC] = useState('');

 const handleSubmit = () => {
  // Add your logic to handle the form submission, such as sending data to a server.

  console.log('Card Number:', cardNumber);
  console.log('Expiry Date:', expiryDate);
  console.log('CVC:', cvc);

  // Reset the form fields after submission
  setCardNumber('');
  setExpiryDate('');
  setCVC('');

  // Dismiss the keyboard
  Keyboard.dismiss();
 };

 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <View style={styles.container}>
    <View style={styles.inputContainer}>
     <Text>Card Number</Text>
     <InputWithLabel
      label="Card Number"
      style={styles.input}
      value={cardNumber}
      onChangeText={(text) => setCardNumber(text)}
      placeholder="1234 5678 9012 3456"
      keyboardType="numeric"
      maxLength={16}
      required
     />
    </View>
    <View style={styles.inputContainer}>
     <Text>Expiry Date</Text>
     <TextInput
      style={styles.input}
      value={expiryDate}
      onChangeText={(text) => setExpiryDate(text)}
      placeholder="MM/YY"
      keyboardType="numeric"
      maxLength={5}
      required
     />
    </View>
    <View style={styles.inputContainer}>
     <Text>CVC</Text>
     <TextInput
      style={styles.input}
      value={cvc}
      onChangeText={(text) => setCVC(text)}
      placeholder="123"
      keyboardType="numeric"
      maxLength={3}
      required
     />
    </View>
    <Button title="Submit" onPress={handleSubmit} />
   </View>
  </TouchableWithoutFeedback>
 );
};

export { CreditCardAddForm };
