import * as React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { styles } from "./styles";

interface Props {
  card_number: string;
  cardholder_name: string;
  expiration_date: string;
  cvv: string;
  provider: string;
  bank_name: string;
}

const CreditCard: React.FC<Props> = ({ item }) => {
  const {
    card_number,
    cardholder_name,
    expiration_date,
    cvv,
    provider,
    bank_name,
  } = item;

  return (
    <View style={styles.card6}>
      <LinearGradient
        style={styles.card6Child}
        locations={[0, 1]}
        colors={["#d24074", "#1268c3"]}
      />
      <Image
        style={styles.card6Item}
        contentFit="cover"
        source={require("../../../assets/favicon.png")}
      />
      <Text style={[styles.ciromaChineyeAdekunle, styles.debitTypo]}>
        {cardholder_name}
      </Text>
      <Text style={[styles.bankName, styles.logoFlexBox]}>{bank_name}</Text>
      <Text style={[styles.debit, styles.debitTypo]}>Debit</Text>
      <Text style={[styles.logo, styles.logoFlexBox]}>{`& Logo`}</Text>
      <View style={styles.mastercard}>
        <Image
          style={[styles.mastercardChild, styles.mastercardLayout]}
          contentFit="cover"
          source={require("../../../assets/favicon.png")}
        />
        <Image
          style={[styles.mastercardItem, styles.mastercardLayout]}
          contentFit="cover"
          source={require("../../../assets/favicon.png")}
        />
        <Text style={[styles.mastercard1, styles.debitTypo]}>{provider}</Text>
      </View>
      <Text style={[styles.validThru, styles.textTypo]}>{`VALID
THRU`}</Text>
      <Text style={[styles.text, styles.textTypo]}>{expiration_date}</Text>
      <Text style={[styles.text1, styles.textTypo]}>{card_number}</Text>
    </View>
  );
};

export { CreditCard };
