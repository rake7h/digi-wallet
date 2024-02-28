import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { NAVIGATION } from "../../constants/navigations";
import { HomeCardsScreen } from "../../screens/card-home";

const Stack = createNativeStackNavigator();

export function CardsStack() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.HOME_CARDS}>
      <Stack.Screen name={NAVIGATION.HOME_CARDS} component={HomeCardsScreen} />
    </Stack.Navigator>
  );
}
