import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default class SentimentOutput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ReactSpeedometer
          width={500}
          needleHeightRatio={0.7}
          value={777}
          currentValueText="Sentiment Level"
          customSegmentLabels={[
            {
              text: "Very Low",
              position: "INSIDE",
              color: "#555"
            },
            {
              text: "Low",
              position: "INSIDE",
              color: "#555"
            },
            {
              text: "Ok",
              position: "INSIDE",
              color: "#555",
              fontSize: "19px"
            },
            {
              text: "High",
              position: "INSIDE",
              color: "#555"
            },
            {
              text: "Very High",
              position: "INSIDE",
              color: "#555"
            }
          ]}
          ringWidth={47}
          needleTransitionDuration={3333}
          needleTransition="easeElastic"
          needleColor={"#90f2ff"}
          textColor={"#d8dee9"}
        />{" "}
      </>
    );
  }
}
