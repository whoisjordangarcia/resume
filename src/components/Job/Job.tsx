import React from "react";
import {
    Text,
    StyleSheet,
    View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    jobPosition: {
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: 'bold',
    },
    jobSubHeading: {
        fontSize: 10,
        fontFamily: "Roboto",
        fontWeight: 100,
        marginTop: 2,
        marginBottom: 2
    },
    jobDuration: {
        fontSize: 9,
        fontFamily: "Roboto",
        fontWeight: 100,
    },
    jobMentionsList: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "column",
        width: 500
    },
    jobMentionItem: {
        flexDirection: "row",
        fontFamily: "Roboto",
        fontSize: 10,
        fontWeight: 100,
    },
    jobMentionDot: {
        fontSize: 10,
        fontFamily: "Roboto",
        fontWeight: 100,
        marginHorizontal: 10,
        textAlign: 'justify'
    },
    jobMentionText: {
        fontSize: 10,
        fontFamily: "Roboto",
        fontWeight: 100,
        textAlign: 'justify',
        paddingBottom: 2,
    },
});

interface IProps {
    position: string
    company: string
    location: string
    jobDuration: string
    highlights: string[]
}

const Job: React.FunctionComponent<IProps> = (props) => (
    <View>
        <Text style={styles.jobPosition}>{props.position}</Text>
        <Text style={styles.jobSubHeading}>
            <Text>{props.company}, {props.location}</Text>
            <Text style={styles.jobDuration}> - {props.jobDuration}</Text>
        </Text>
        <View style={styles.jobMentionsList}>
            {props.highlights.map(highlight => (
                <View style={styles.jobMentionItem}>
                    <Text style={styles.jobMentionDot}>-</Text>
                    <Text style={styles.jobMentionText}>{highlight}</Text>
                </View>
            ))}
        </View>
    </View>
);

export default Job;
