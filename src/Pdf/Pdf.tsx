import React from "react";
import {
  Document,
  Font,
  Text,
  Link,
  Page,
  StyleSheet,
  Line,
  Svg,
  View,
} from "@react-pdf/renderer";
import Job from "../components/Job/Job";

import { resumeContent as resume } from "../data/resumeContent"
import HorizontalLine from "../components/HorizontalLine/HorizontalLine";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "./Roboto-Regular.ttf" },
    { src: "./Roboto-Bold.ttf", fontWeight: "bold" },
    { src: "./Roboto-Light.ttf", fontWeight: 100 },
    { src: "./Roboto-LightItalic.ttf", fontWeight: 100, fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 35,
    paddingTop: 20
  },
  name: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 25
  },
  jobTitle: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
  subtitle: {
    fontSize: 10,
    textAlign: "right",
    paddingBottom: 2,
    fontFamily: "Roboto",
    fontWeight: 100,
    alignSelf: 'flex-end'
  },
  sectionHeading: {
    fontSize: 14,
    fontFamily: "Roboto",
    marginBottom: 5,
    marginTop: 5
  },
  text: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 100,
    textAlign: 'justify'
  },
  bold: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 'bold',
  },
  section: {
    // marginTop: 5,
    // marginBottom: 5
  },
});

const Pdf = () => (
  <Document
    title={`${resume.name}'s Resume`}
    author={resume.name}
    subject="Resume"
    pdfVersion={"1.7"}
  >
    <Page size="A4" debug={false} style={styles.body}>
      <View>
        <View style={styles.contactSection}>
          <View>
            <Text style={styles.name}>{resume.name}</Text>
            <Text style={styles.jobTitle}>{resume.jobTitle}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>
              Location: {resume.location}
            </Text>
            <Text style={styles.subtitle}>
              Email: <Link href={`mailto:${resume.email}`}>{resume.email}</Link>
            </Text>
            <Text style={styles.subtitle}>Phone: {resume.mobile}</Text>
          </View>
        </View>
        <View style={styles.contactSection}>
          <View>
          </View>
          <View>
            {
              resume.contactList.map((contact) => {
                return (<Text style={styles.subtitle}>
                  {contact.type}:{" "}
                  <Link href={contact.href}>{contact.text}</Link>
                </Text>)
              })
            }
          </View>
        </View>

      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Profile</Text>
        <HorizontalLine />
        <Text style={styles.text}>
          {resume.profileContent}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Experience</Text>
        <HorizontalLine />
        {
          resume.jobs.map((job) => {
            return (
              <Job
                position={job.position}
                company={job.company}
                location={job.location}
                jobDuration={job.jobDuration}
                highlights={job.hightlights}
              />)
          })
        }
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Technical Skills</Text>
        <HorizontalLine />
        <Text style={styles.text}>
          <Text style={styles.bold}>Programming Languages:</Text> {resume.skillsAndInterest.programmingLanguages.join(", ")} // <Text style={styles.bold}>Frameworks:</Text> {resume.skillsAndInterest.frameworks.join(", ")} // <Text style={styles.bold}>Tools & Technologies:</Text> {resume.skillsAndInterest.toolsAndTechnologies.join(", ")}
        </Text>

      </View>

      <View style={styles.section} >
        <Text style={styles.sectionHeading}>Education</Text>
        <HorizontalLine />
        <Text style={styles.text}>{resume.education.degree}</Text>
        <Text style={styles.text}>
          {resume.education.university}, {resume.education.location} - {resume.education.year}
        </Text>
      </View >
    </Page >
  </Document >
);

export default Pdf;
