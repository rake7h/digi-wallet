import * as React from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";

interface Props {
  account_number: string;
  ifsc_code: string;
  branch_name: string;
  bank_name: string;
  account_holder_name: string;
}

const BankCard: React.FC<Props> = ({ item }) => {
  const {
    account_number,
    ifsc_code,
    branch_name,
    bank_name,
    account_holder_name,
  } = item;

  return (
    <View style={styles.groupChildLayout}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text selectable style={[styles.text, styles.textTypo]}>
        {account_number}
      </Text>
      <Text style={[styles.rakeshSingh, styles.textTypo]}>
        {account_holder_name}
      </Text>
      <Text style={[styles.cbin01237u, styles.textTypo]}>CBIN01237U</Text>
      <Text style={[styles.cenralBankOf, styles.textTypo]}>{bank_name}</Text>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/favicon.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../../../assets/favicon.png")}
        />
        <Text style={[styles.mastercard, styles.savingTypo]}>{ifsc_code}</Text>
      </View>
      <Text style={[styles.saving, styles.savingTypo]}>Saving</Text>
    </View>
  );
};

export { BankCard };
