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
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
  contactSection: {
    marginTop: 20,
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
  jobPosition: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 100,
    marginTop: 10
  },
  jobDuration: {
    fontSize: 9,
    fontFamily: "Roboto",
    fontWeight: 100,
    fontStyle: 'italic',
    marginBottom: 5
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
  },
  ul: {
    marginLeft: 15,
    flexDirection: "column",
    width: 400
  },
  li: {
    flexDirection: "row",
  },
  liDot: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 100,
    marginHorizontal: 2,
    textAlign: 'justify'
  },
  liText: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 100,
    textAlign: 'justify',
    paddingBottom: 2,
  },
  textBold: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: 'bold',
  }
});

const Pdf = () => (
  <Document
    title="Jordan Garcia's Resume"
    author="Jordan Garcia"
    subject="Resume"
    pdfVersion={"1.7"}
  >
    <Page size="A4" debug={false} style={styles.body}>
      <View>
        <View style={styles.contactSection}>
          <View>
            <Text style={styles.name}>Jordan Garcia</Text>
            <Text style={styles.jobTitle}>Engineering Manager</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>
              miami, florida
            </Text>
            <Text style={styles.subtitle}>
              e:{" "}<Link src="mailto:arickho@gmail.com">arickho@gmail.com</Link>
            </Text>
            <Text style={styles.subtitle}>m: +1 (929) 272 2291</Text>
          </View>
        </View>
        <View style={styles.contactSection}>
          <View>
            <Text style={styles.subtitle}>
              l:{" "}
              <Link src="https://www.linkedin.com/in/arickhogarcia/">
                linkedin.com/in/arickhogarcia
              </Link>
            </Text>
            <Text style={styles.subtitle}>
              w:{" "}<Link src="https://jordangarcia.me">jordangarcia.me</Link>
            </Text>
            <Text style={styles.subtitle}>
              g:{" "}
              <Link src="https://github.com/whoisjordangarcia">
                github.com/whoisjordangarcia
              </Link>
            </Text>
          </View>
        </View>
        <Svg height="5" width="550" style={styles.line}>
          <Line
            x1="0"
            y1="0"
            x2="550"
            y2="0"
            strokeWidth={2}
            stroke="rgb(0,0,0)"
          />
        </Svg>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Profile</Text>
        <Text style={styles.text}>
          Engineering Manager with over a decade of experience in developing
          robust web applications and backend services. Demonstrates strong
          leadership in managing small to medium teams, delivering project
          milestones, and developing strategic roadmaps. Adept in fostering team
          growth, encouraging cross-functional collaboration, and mentoring.
          Versatile in technology, proficient in switching in-between individual
          contributor and management roles, ensuring high-quality software
          solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Technical Skills</Text>
        <View style={styles.ul}>
          <View style={styles.li}>
            <Text style={styles.liText}>Programming Languages: Typescript, Python</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liText}>Frameworks: React, Django, NextJs, NestJs</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liText}>Tools & Technologies: Auth0, Kubernetes, Kafka, Contentful, NewRelic,
              Percy, CI/CD, Terraform. Cloudfront, Elasticsearch, Redis</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Experience</Text>

        <Text style={styles.jobPosition}><Text style={styles.textBold}>Engineering Manager</Text>, Invitae, Remote</Text>
        <Text style={styles.jobDuration}>May 2021 - Present (2.75 years)</Text>
        <View style={styles.ul}>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Led the identity team, migrating 4.5 million user accounts to a modern
              authentication system with zero downtime.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Spearheaded the development
              of an authorization system enhancing resource access auditing.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Managed
              a diverse team comprising seniors individual contributors and
              contractors, maintaining high productivity and engagement.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Instituted
              CI/CD practices, significantly reducing P1 incidents and improve system
              availability from 80.123% to 99.9984%.</Text>
          </View>
        </View>

        <Text style={styles.jobPosition}><Text style={styles.textBold}>Engineering Lead</Text>, Invitae, Remote</Text>
        <Text style={styles.jobDuration}>Nov 2018 - May 2021 (2.5 years)</Text>
        <View style={styles.ul}>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Created the preview deploy system at the company, enabling designers
              and product to test new web functionality before merging to the main
              branch.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Directed and migrated invitae.com website from legacy django
              cms to contentful building a re-useable CMS UI library. Allowing
              marketing to deploy new pages on demand vs weekly/monthly releases.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Led the decentralization of the largest monolithic application into
              microservices, elevating system reliability, maintainability, and
              resilience on company re-orgs.</Text>
          </View>
        </View>

        <Text style={styles.jobPosition}>
          <Text style={styles.textBold}>Senior Software Engineer</Text>, TodayTix, New York, NY
        </Text>
        <Text style={styles.jobDuration}>Oct 2017 - Oct 2018 (1 year)</Text>
        <View style={styles.ul}>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Launched a high-impact broadway show lottery feature, boosting site
              traffic by 20%.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Migrated the web application to typescript, enhacning
              code reliability and maintainability.</Text>
          </View>
        </View>


        <Text style={styles.jobPosition}>
          <Text style={styles.textBold}>Senior Software Engineer</Text>, Tigerspike, New York, NY
        </Text>
        <Text style={styles.jobDuration}>Feb 2014 - Oct 2017 (3.67 years)</Text>
        <View style={styles.ul}>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Redesigned a global intranet for a leading financial firm, integrating
              efficient search capbilities.</Text>
          </View>
          <View style={styles.li}>
            <Text style={styles.liDot}>-</Text>
            <Text style={styles.liText}>Developed a geographically aware asset
              management website, supporting over 30 countries with optimal
              performance.</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Education</Text>
        <Text style={styles.text}>Bachelor of Computer Science, Major in Software Engineering</Text>
        <Text style={styles.text}>
          Edith Cowan University, Perth, WA, Australia - 2011
        </Text>
      </View>
    </Page>
  </Document >
);

export default Pdf;
