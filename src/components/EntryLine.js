import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

const EntryLine = (props) => {
  const { gridName, gridPrice, isExpense = false } = props;
  return (
    <Segment color={isExpense ? "green" : "red"}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {gridName}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {gridPrice}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
