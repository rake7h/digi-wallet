import { theme } from "@digi-wallet/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { BankStack, CardsStack, SettingStack } from "./stacks";
import { TABS } from "../constants/navigations";
import { SettingScreen, HomeBankScreen, HomeCardsScreen } from "../screens";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { colors } = useTheme();
  const scheme = useColorScheme();
  console.log("scheme", theme[scheme]);
  return (
    <NavigationContainer theme={theme[scheme]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.activeTab,
          tabBarInactiveTintColor: colors.inactiveTab,
          // tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
        })}
      >
        <Tab.Screen name={TABS.homeCards} component={CardsStack} />
        <Tab.Screen name={TABS.homeBanks} component={BankStack} />
        <Tab.Screen name={TABS.settings} component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
