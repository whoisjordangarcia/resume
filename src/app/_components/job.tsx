import React from "react";
import { Text, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  jobPosition: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 2,
  },
  jobSubHeading: {
    fontSize: 9,
    fontFamily: "Roboto",
    fontWeight: 100,
  },
  jobDuration: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
  },
  jobMentionsList: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "column",
    width: 500,
  },
  jobMentionItem: {
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: 8,
    fontWeight: 100,
  },
  jobMentionDot: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    marginHorizontal: 8,
    textAlign: "justify",
  },
  jobMentionText: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    textAlign: "justify",
    paddingBottom: 2,
  },
});

interface IPosition {
  title: string;
  jobDuration: string;
  location: string;
  highlights: string[];
}

interface IProps {
  company: string;
  positions: IPosition[];
}

const Job: React.FunctionComponent<IProps> = (props) => (
  <View>
    <Text style={styles.jobSubHeading}>{props.company}</Text>
    {props.positions.map((position) => (
      <>
        <Text style={styles.jobPosition}>{position.title}</Text>
        <Text style={styles.jobDuration}>
          {position.location} - {position.jobDuration}
        </Text>
        <View style={styles.jobMentionsList}>
          {position.highlights?.map((highlight) => (
            <View key={highlight} style={styles.jobMentionItem}>
              <Text style={styles.jobMentionDot}>-</Text>
              <Text style={styles.jobMentionText}>{highlight}</Text>
            </View>
          ))}
        </View>
      </>
    ))}
  </View>
);

export default Job;
