import React from "react";
import { mock } from "@digi-wallet/store";
import { CardList } from "./list-view";

const HomeBankScreen = () => {
  const cardData = mock.data.bank;

  return <CardList data={cardData} />;
};

export { HomeBankScreen };
