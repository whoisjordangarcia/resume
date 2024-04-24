import React from "react";
import {
  Document,
  Font,
  Text,
  Link,
  Page,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import Job from "./job";

import { resumeContent } from "~/app/data/resume-content";
import { individualContributor } from "~/app/data/individual-contributor";

import HorizontalLine from "./horizontal-line";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "./Roboto-Regular.ttf" },
    { src: "./Roboto-Bold.ttf", fontWeight: "bold" },
    { src: "./Roboto-Light.ttf", fontWeight: 100 },
    { src: "./Roboto-LightItalic.ttf", fontWeight: 100, fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: "Roboto",
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: 8,
    textAlign: "right",
    paddingBottom: 2,
    fontFamily: "Roboto",
    fontWeight: 100,
    alignSelf: "flex-end",
  },
  sectionHeading: {
    fontSize: 12,
    fontFamily: "Roboto",
    marginBottom: 2,
    marginTop: 2,
  },
  text: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    textAlign: "justify",
  },
  skillText: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    textAlign: "justify",
    marginBottom: 5,
  },
  bold: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  section: {},
  contact: {
    fontSize: 8,
    fontFamily: "Roboto",
    fontWeight: 100,
    marginBottom: 5,
  },
  linkSection: {
    paddingTop: 25
  }
});

interface IProps {
  variant: string;
}

const Pdf = ({ variant }: IProps) => {
  let resume = resumeContent;

  if (variant === "individual-contributor") {
    resume = { ...resume, ...individualContributor };
  }
  return (
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
              <Text style={styles.contact}>
                {resume.location},{" "}
                <Link href={`mailto:${resume.email}`}>{resume.email}</Link>,{" "}
                <Link href={`tel:${resume.mobile}`}>{resume.mobile}</Link>
              </Text>
            </View>
            <View style={styles.linkSection}>
              {resume.contactList.map((contact) => {
                return (
                  <Text key={contact.text} style={styles.subtitle}>
                    {contact.type}:{" "}
                    <Link href={contact.href}>{contact.text}</Link>
                  </Text>
                );
              })}
            </View>
          </View>
          <View style={styles.contactSection}>
            <View></View>
            <View></View>
          </View>
        </View>

        {/* <View style={styles.section}> */}
        {/*   <Text style={styles.sectionHeading}>Profile</Text> */}
        {/*   <HorizontalLine /> */}
        {/*   <Text style={styles.text}> */}
        {/*     {resume.profileContent} */}
        {/*   </Text> */}
        {/* </View> */}

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Professional Experience</Text>
          <HorizontalLine />
          {resume.jobs.map((job) => {
            return (
              <Job
                key={job.company}
                company={job.company}
                positions={job.positions}
              />
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Skills</Text>
          <HorizontalLine />
          <Text style={styles.skillText}>{resume.skills.join(", ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Education</Text>
          <HorizontalLine />
          <Text style={styles.text}>{resume.education.degree}</Text>
          <Text style={styles.text}>
            {resume.education.university}, {resume.education.location} -{" "}
            {resume.education.year}
          </Text>
          <Text style={styles.text}>
            Achievements: {resume.education.achievements.join(", ")}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
