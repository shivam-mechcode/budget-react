import React from "react";
import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";

import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

const App = () => {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        size="small"
        statsLabel="Your Balance:"
        statsValue="2550.53"
      />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine gridName="income" gridPrice="$10.00" />
      <EntryLine gridName="expense" gridPrice="$10.00" isExpense />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
};

export default App;
