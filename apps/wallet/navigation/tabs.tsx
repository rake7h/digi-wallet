import { theme } from "@digi-wallet/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { BankStack, CardsStack, SettingStack } from "./stacks";
import { TABS } from "../constants/navigations";
import { SettingScreen, HomeBankScreen, HomeCardsScreen } from "../screens";
import { AntDesign, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const scheme = useColorScheme();
  const selectedTheme = theme[scheme];

  return (
    <NavigationContainer theme={selectedTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: selectedTheme.colors.activeTab,
          tabBarInactiveTintColor: selectedTheme.colors.inactiveTab,
          tabBarStyle: {
            backgroundColor: selectedTheme.colors.tabBG,
            borderTopColor: "transparent",
          },
          // tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
        })}
      >
        <Tab.Screen
          name={TABS.homeCards}
          component={CardsStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="creditcard"
                size={24}
                color={
                  focused
                    ? selectedTheme.colors.activeTab
                    : selectedTheme.colors.inactiveTab
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name={TABS.homeBanks}
          component={BankStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign
                name="bank"
                size={24}
                color={
                  focused
                    ? selectedTheme.colors.activeTab
                    : selectedTheme.colors.inactiveTab
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name={TABS.settings}
          component={SettingStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name="settings"
                size={24}
                color={
                  focused
                    ? selectedTheme.colors.activeTab
                    : selectedTheme.colors.inactiveTab
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
