// Button.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({ onPress, title, size }) => {
 const buttonStyle =
  {
   small: styles.smallButton,
   medium: styles.mediumButton,
   large: styles.largeButton,
  }[size] || styles.mediumButton;

 return (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
   <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
 );
};

export { Button };
