const resumeContent = {
    name: 'Jordan Garcia',
    jobTitle: 'Engineering Manager',
    location: "Miami, FL",
    email: "arickho@gmail.com",
    mobile: '929-272-2291',
    contactList: [
        {
            href: "https://www.linkedin.com/in/arickhogarcia/",
            text: "linkedin.com/in/arickhogarcia",
            type: "Linkedin"
        },
        {
            href: "https://jordangarcia.me",
            text: "jordangarcia.me",
            type: "Personal"
        },
        {
            href: "https://github.com/whoisjordangarcia",
            text: "github.com/whoisjordangarcia",
            type: "Github"
        }
    ],
    profileContent: "Experienced Engineering Manager with 10+ years of hands-on experience in developing robust web applications and backend services, expertise in creating solutions and web development. Proven track record on building strong teams that demonstrates strong leadership, delivering project milestones, and developing strategic roadmaps. Adept in fostering team growth, encouraging cross-functional collaboration, implementing agile methodologies, and mentoring.",
    jobs: [
        {
            position: "Engineering Manager",
            company: "Invitae",
            location: "Remote",
            jobDuration: "May 2021 - Present (2.75 years)",
            hightlights: [
                "Led development on migrating 4.5 million user accounts to a modern authentication system with zero downtime",
                "Managed three teams with 5 direct reports and 11 contractors across NA, LATAM, and EMEA.",
                "Motivated range of mid to senior individual contributors to drive complex solutions that require coordination with multiple teams for Identity and Access Management (IAM) projects.",
                "Instituted CI/CD best practices, static analysis tooling, visual regression, significantly reducing P1 incidents and improve system availability from 80.123% to 99.9984%."
            ]
        },
        {
            position: "Enginering Lead",
            company: "Invitae",
            location: "Remote",
            jobDuration: "Nov 2018 - May 2021 (2.5 years)",
            hightlights: [
                "Created the preview deploy system at the company, enabling designers and product to test new web functionality before merging to the main branch.",
                "Directed and migrated invitae.com website from legacy django cms to contentful building a re-useable CMS UI library. Allowing marketing to publish new pages on demand.",
                "De-coupled a large monolithic application into micoservices/micro-frontends, improve overall system reliability, maintainability, and resilience to company re-orgs."
            ]
        },
        {
            position: "Senior Software Engineer",
            company: "TodayTix",
            location: "New York, NY",
            jobDuration: "Oct 2017 - Oct 2018 (1 year)",
            hightlights: [
                "Launched a high impact broadway show lottery feature, boosting site traffic by 20%.",
                "Migrated the web application to typescript, enhacning code reliability and maintainability."
            ]
        },
        {
            position: "Senior Software Engineer",
            company: "Tigerspike",
            location: "New York, NY",
            jobDuration: "Feb 2014 - Oct 2017 (3.67 years)",
            hightlights: [
                "Redesigned a global intranet for a leading financial firm, integrating efficient search capbilities.",
                "Developed a geographically aware asset management website, supporting over 30 countries with optimal performance."
            ]
        },
        {
            position: "Software Engineer",
            company: "Simbiotic",
            location: "Perth, Western Australia",
            jobDuration: "Jul 2011 - Jan 2014 (2.6 years)",
            hightlights: [
                "Developed an algorithm to generate time-base cycle forecasting to notify rail operation engineers what points in the workflow were affecting cycle times.",
                "Created a visual map that identifies each locomotive's exact location in real-time"
            ]
        },
    ],
    education: {
        degree: "Bachelor of Computer Science",
        university: "Edith Cowan University",
        location: "Perth, WA, Australia",
        year: '2011',
    },
    skillsAndInterest: {
        programmingLanguages: ["Typescript", "Python"],
        frameworks: ["React", "Django", "NextJs", "NestJs"],
        toolsAndTechnologies: ["Auth0", "Kubernetes", "Kafka", "Contentful", "NewRelic",
            "Percy", "CI/CD", "Terraform", "Cloudfront", "Elasticsearch", "Redis"]
    }
}

export { resumeContent }