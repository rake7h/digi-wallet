import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const InputWithLabel = ({
 label,
 value,
 onChangeText,
 placeholder,
 keyboardType,
 maxLength,
 required = false,
}) => {
 return (
  <View style={styles.container}>
   <Text style={styles.label}>{label}</Text>
   <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType={keyboardType}
    maxLength={maxLength}
    required={required}
   />
  </View>
 );
};

export { InputWithLabel };
