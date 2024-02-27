import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import { TabNavigator } from './navigation/tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export function App() {

  return (
   
        <GestureHandlerRootView style={styles.container}>
          <TabNavigator />
        </GestureHandlerRootView>
     
  );
}