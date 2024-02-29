import React from "react";
import { mock } from "@digi-wallet/store";
import { CardList } from "./list-view";

const HomeCardsScreen = () => {
  const cardData = mock.data.cards;

  return <CardList data={cardData} />;
};

export { HomeCardsScreen };
