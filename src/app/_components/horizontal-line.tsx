import React from "react";
import {
  StyleSheet,
  Svg,
  Line,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  line: {
    marginBottom: 5,
  },
});


const HorizontalLine: React.FunctionComponent = () => (
  <Svg height="1" width="530" style={styles.line}>
    <Line
      x1="0"
      y1="0"
      x2="530"
      y2="0"
      strokeWidth={1}
      stroke="rgb(0,0,0)"
    />
  </Svg>
);

export default HorizontalLine
