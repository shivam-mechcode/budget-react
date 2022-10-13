import React from "react";
import { Statistic } from "semantic-ui-react";

const DisplayBalance = (props) => {
  const { size, color, statsLabel, statsValue } = props;
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>
        {statsLabel}
      </Statistic.Label>
      <Statistic.Value>{statsValue}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
