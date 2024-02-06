import React from 'react';
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
} from '@react-pdf/renderer';

Font.register({
  family: 'Roboto', fonts: [
    { src: './Roboto-Regular.ttf' },
    { src: './Roboto-Bold.ttf', fontWeight: 'bold' },
    { src: './Roboto-Light.ttf', fontWeight: 100 },
  ]
})

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },

  contactSection: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch'
  },

  title: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'right',
    paddingBottom: 2,
    fontFamily: 'Roboto',
    fontWeight: 100
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto',
  },
  text: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontWeight: 100
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  line: {
    marginTop: 10,
    marginBottom: 10
  }
});


const Pdf = () => (
  <Document title="Jordan Garcia's Resume" author="Jordan Garcia" subject='Resume' pdfVersion={"1.7"} >
    <Page debug={false} style={styles.body}>
      <Text style={styles.name}>Jordan Garcia</Text>
      <Text style={styles.jobTitle}>Engineering Manager</Text>

      <View style={styles.contactSection}>
        <View>
          <Text style={styles.subtitle}><Link src="mailto:arickho@gmail.com">arickho@gmail.com</Link> · +1 (929) 272 2291 · <Link src="https://github.com/whoisjordangarcia">github.com/whoisjordangarcia</Link> · <Text style={styles.subtitle}>linkedin: <Link src="https://www.linkedin.com/in/arickhogarcia/">linkedin.com/in/arickhogarcia/</Link></Text> · <Link src="https://jordangarcia.me/">jordangarcia.me</Link>
          </Text>

        </View>
        <View>
          <Text style={styles.subtitle}>location: miami, florida</Text>
        </View>
      </View>





      <Svg height="5" width="550" style={styles.line}>
        <Line x1="0" y1="0" x2="550" y2="0" strokeWidth={2} stroke="rgb(0,0,0)" />
      </Svg>


      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Seasoned Engineering Manager with over a decade of experience in developing robust web applications and backend services. Demonstrates strong leadership in managing small to medium teams, delivering project milestones, and developing strategic roadmaps. Adept in fostering team growth, encouraging cross-functional collaboration, and mentoring. Versatile in technology, proficient in transitioning between individual contributor and management roles, ensuring high-quality software solutions.</Text>

      <Text style={styles.title}>Technical Skills</Text>
      <Text style={styles.text}>
        Programming Languages: Typescript, Python
      </Text>
      <Text style={styles.text}>
        Frameworks: React, Django, NextJs, NestJs
      </Text>
      <Text style={styles.text}>
        Tools & Technologies: Auth0, Kubernetes, Kafka, Contentful, NewRelic, Percy, CI/CD, Terraform. Cloudfront, Elasticsearch, Redis
      </Text>

      <Text style={styles.title}>Professional Experience</Text>

      <Text style={styles.subtitle}>Engineering Manager, Invitae, Remote</Text>
      <Text style={styles.subtitle}>May 2021 - Present</Text>
      <Text style={styles.text}>
        - Led the identity team, migrating 4.5 million user accounts  to a modern authentication system with zero downtime.
        - Spearheaded the development of an authorization system enhancing resource access auditing.
        - Managed  a diverse team comprising seniors individual contributors and contractors, maintaining high productivity and engagement.
        - Instituted CI/CD practices, significantly reducing P1 incidents and improve system availability from 80.123% to 99.9984%.
      </Text>

      <Text style={styles.subtitle}>Engineering Lead, Invitae, Remote</Text>
      <Text style={styles.subtitle}>Nov 2018 - May 2021</Text>
      <Text style={styles.text}>
        - Created the preview deploy system at the company, enabling designers and product to test new web functionality before merging to the main branch.
        - Directed and migrated [invitae.com](http://invitae.com) website from legacy django cms to contentful building a re-useable CMS UI library. Allowing marketing to deploy new pages on demand vs weekly/monthly releases.
        - Led the decentralization of the largest monolithic application into microservices, elevating system reliability, maintainability, and resilience on company re-orgs.
      </Text>

      <Text style={styles.subtitle}>Senior Software Engineer, TodayTix, New York, NY</Text>
      <Text style={styles.subtitle}>Oct 2017 - Oct 2018</Text>
      <Text style={styles.text}>
        - Launched a  high-impact broadway show lottery feature, boosting site traffic by 20%.
        - Migrated the web application to typescript, enhacning code reliability and maintainability.
      </Text>

      <Text style={styles.subtitle}>Senior Software Engineer,  Tigerspike, New York, NY</Text>
      <Text style={styles.subtitle}>Feb 2014 - Oct 2017</Text>
      <Text style={styles.text}>
        - Redesigned a global intranet for a leading financial  firm, integrating efficient search  capbilities.
        - Developed a geographically aware asset management website, supporting over 30 countries with optimal performance.
      </Text>

      <Text style={styles.title}>Education</Text>
      <Text style={styles.text}>
        Bachelor of Computer Science
      </Text>
      <Text style={styles.text}>
        Edith Cowan University, Perth, WA, Australia - 2011
      </Text>
    </Page>
  </Document >
);


export default Pdf;
