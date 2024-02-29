import React from "react";
import { BankCard } from "../../components/cards/bank-card";
import { View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";

const CardList = ({ data }) => {
  const cardData = data;

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <>
        <BankCard item={item} />
      </>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export { CardList };
