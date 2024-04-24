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
  jobCompanyAndLocation: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
  },
  jobDuration: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    alignSelf: "center",
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
  jobHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    {props.positions.map((position) => (
      <>
        <View style={styles.jobHeading}>
          <Text style={styles.jobPosition}>{position.title}</Text>
          <Text style={styles.jobDuration}>{position.jobDuration}</Text>
        </View>
        <Text style={styles.jobCompanyAndLocation}>
          {props.company} - {position.location}
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
