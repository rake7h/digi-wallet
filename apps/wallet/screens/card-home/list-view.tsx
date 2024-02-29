import React from "react";
import { CreditCard } from "../../components/cards/credit-card";
import { View, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";

const CardList = ({ data }) => {
  const cardData = data;

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <>
        <CreditCard item={item} />
      </>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.card_id.toString()}
      />
    </SafeAreaView>
  );
};

export { CardList };
