import React, { Component } from "react";
import Gauge from "./Gauge";

const initialEmotions = {
  sadness: 0,
  analytical: 0,
  anger: 0
};

export default class SentimentOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentenceId: -1,
      emotions: { ...initialEmotions }
    };
  }

  render() {
    return (
      <>
        <Gauge value={100} />
      </>
    );
  }
}
