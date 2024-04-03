const resumeContent = {
  name: "Jordan Garcia",
  jobTitle: "Engineering Manager",
  location: "3131 NE 7th Ave, Miami, FL 33137",
  email: "arickho@gmail.com",
  mobile: "+1 (929) 272 2291",
  contactList: [
    {
      href: "https://www.linkedin.com/in/arickhogarcia",
      text: "linkedin.com/in/arickhogarcia",
      type: "Linkedin",
    },
    {
      href: "https://jordangarcia.me",
      text: "jordangarcia.me",
      type: "Personal",
    },
    {
      href: "https://github.com/whoisjordangarcia",
      text: "github.com/whoisjordangarcia",
      type: "Github",
    },
  ],
  profileContent:
    "Experienced Engineering Manager with 10+ years of hands-on experience in developing robust web applications and backend services, expertise in creating solutions and web development. Proven track record on building strong teams that demonstrates strong leadership, delivering project milestones, and developing strategic roadmaps. Proficient in fostering team growth, encouraging cross-functional collaboration, implementing agile methodologies, and mentoring.",
  jobs: [
    {
      position: "Engineering Manager",
      positions:[],
      company: "Invitae",
      location: "Remote",
      jobDuration: "May 2021 - Present",
      hightlights: [
        "Team led the development on migrating 4.5 million user accounts to a modern authentication with SSO and MFA with zero downtime",
        "Team led the development of an centralized AuthZ (Authorization) system enhancing resource sharing capabilities and auditing.",
        "Managed three teams with 5 direct reports and 11 contractors across NA, LATAM, and EMEA.",
        "Motivated range of mid to senior individual contributors to drive complex solutions that require coordination with multiple teams for Identity and Access Management (IAM) projects.",
        "Instituted CI/CD best practices, static analysis tooling, visual regression, observability significantly reducing P1 incidents and improve system availability.",
      ],
    },
    {
      position: "Enginering Lead",
      positions:[],
      company: "Invitae",
      location: "Remote",
      jobDuration: "Nov 2018 - May 2021",
      hightlights: [
        "Created the preview deploy system at the company, enabling designers and product to test new web functionality before merging to the main branch.",
        "Migrated invitae.com website from legacy django cms to contentful building a re-useable CMS UI library. Allowing marketing to deploy new pages on demand vs weekly / monthly releases.",
        "De-coupled a large monolithic application into micoservices, reducing deployments from 2-3 weeks down to weekly releases and improved uptime for 98.9% to 99.99%",
      ],
    },
    {
      position: "Senior Software Engineer",
      positions:[],
      company: "TodayTix",
      location: "New York, NY",
      jobDuration: "Oct 2017 - Oct 2018",
      hightlights: [
        "Launched a high impact broadway show lottery feature, boosting site traffic by 20%.",
        "Migrated todaytix.com from javascript to typescript, enhancing code reliability and maintainability.",
        "Recognized with MVP Award 2017"
      ],
    },
    {
      position: "Senior Software Engineer",
      positions:[],
      company: "Tigerspike",
      location: "New York, NY",
      jobDuration: "Feb 2014 - Oct 2017",
      hightlights: [
        "Redesigned a global intranet for a leading financial firm, integrating efficient search capabilities for user directory",
        "Re-platformed asset management website, supporting over 7 different locales.",
      ],
    },
    {
      position: "Software Engineer",
      positions:[],
      company: "Simbiotic",
      location: "Perth, Western Australia",
      jobDuration: "Jul 2011 - Jan 2014",
      hightlights: [
        "Developed an algorithm to generate time-base cycle forecasting to notify rail operation engineers what points in the workflow were affecting cycle times.",
        "Created a visual map that identifies each locomotive's exact location in real-time",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Computer Science",
    university: "Edith Cowan University",
    location: "Perth, WA, Australia",
    year: "2011",
    achievements: [
      "Winner of 2013 APCO Australiasia Young Public Safety Innovation Award",
      "Winner of 2012 National iAward",
      "Finalist Nomination of 2012 APICTA Awards",
      "Winner of 21st 2011-2012 WAiTTA Tertiary Student Award"
    ]
  },
  skills: ["Javascript", "Python", "C#", "React", "Django", "Next.js", "NestJS", "NodeJs", "ASP.NET", "HTML", "CSS", "Postgres", "Kubernetes", "Kafka", "New Relic", "Redis", "Docker", "Github Actions", "Elasticsearch", "Jenkins", "AWS (S3, Cloudfront, Cloudwatch, S3, SES, SNS, SQS, ECS, DynamoDb)", "Auth0", "Typescript"],
  skillsAndInterest: {
    programmingLanguages: ["Javascript", "Typescript", "Python", "C#"],
    frameworks: ["React", "Django", "Next.js", "NestJS", "NodeJs", "ASP.NET", "Elasticsearch, Redis"],
    cloudServices: ["New Relic, Github Actions, AWS (S3, Cloudfront, Cloudwatch, S3, SES, SNS, SQS, ECS, DynamoDB), Auth0"],
    toolsAndTechnologies: [
      "HTML5/CSS3",
      "Postgres",
      "Cypress/Jest",
      "Kubernetes",
      "Kafka",
      "Terraform",
      "Redis",
      "Docker",
    ],
  },
};

export { resumeContent };
