import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../../constants/navigations';
import { HomeBankScreen } from '../../screens/bank-home';

const Stack = createNativeStackNavigator();

export function BankStack() {
  return (
    <Stack.Navigator 
    
    initialRouteName={NAVIGATION.SETTING}>
      <Stack.Screen name={NAVIGATION.SETTING} component={HomeBankScreen} />
    </Stack.Navigator>
  );
}