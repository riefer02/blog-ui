<template>
  <div class="resume-container">
    <KnowledgeInfo :knowledges="knowledges" />
    <SummaryInfo :summary="summary" />
    <hr />
    <ExperienceInfo :experience="experience" />
    <hr />
    <EducationInfo :education="education" />
    <hr />
    <PersonalInfo :personalInfo="personalInfo" />
    <LinksInfo :links="links" />
    <hr />
  </div>
</template>

<script>
import ExperienceInfo from '@/components/resume/ExperienceInfo.vue';
import EducationInfo from '@/components/resume/EducationInfo.vue';
import KnowledgeInfo from '@/components/resume/KnowledgeInfo.vue';
import PersonalInfo from '@/components/resume/PersonalInfo.vue';
import SummaryInfo from '@/components/resume/SummaryInfo.vue';
import LinksInfo from '@/components/resume/LinksInfo.vue';
export default {
  name: 'Resume',
  components: {
    ExperienceInfo,
    EducationInfo,
    KnowledgeInfo,
    PersonalInfo,
    LinksInfo,
    SummaryInfo,
  },
  data: () => ({
    knowledges: [
      'WordPress',
      'React',
      'Vue',
      'Gatsby',
      'Next.js',
      'GraphQL',
      'Git',
      'Node',
      'Deno',
      'Electron',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'SQL',
      'Serverless Functions',
      'Django',
      'React Native',
      'Express',
      'Redux',
      'Data Modeling',
      'Data Security',
      'NoSQL',
      'Web App Architecture',
      'Heroku',
      'Netlify',
      'DNS Management',
      'CSS3',
      'Edge Functions',
      'Responsive Design',
      'Bootstrap',
      'SASS',
      'SCSS',
      'Styled Components',
      'TailwindCSS',
      'Stripe',
      'Mapbox',
      'Ant',
      'Javascript',
      'Typescript',
      'Jquery',
      'PHP',
      'UI/UX Design',
      'Agile',
      'Docker',
      'Google Analytics',
      'Premiere Pro',
      'Photoshop',
      'Media Encoder',
      'Logic Pro X',
      'Cubase',
      'PHP',
      'and more...',
    ],
    summary:
      'I am a Full Stack Developer who builds problem-solving web applications and high-fidelity UX to drive growth and goal acquisitions.  I am a fast learner of new technologies with a  strong grasp of computer science fundamentals, algorithmic logic, frontend frameworks, database management, and more. I am an experienced, results-oriented leader in person, remotely, and in the professional community.',
    links: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andrewriefenstahl',
      },
      { name: 'YouTube', link: 'https://youtu.be/erDW9qG8Vrs' },
      { name: 'GitHub', link: 'https://github.com/riefer02' },
      { name: 'Instagram', link: 'https://www.instagram.com/riefer02' },
    ],
    experience: [
    {
        date: 'May 2022 - Present',
        roleTitle: 'Public Engagement Engineer',
        employer: 'Fetch.ai/flockx',
        location: 'Cambridge, England, UK',
        description: [
          `Develop and manage the Gatsby framework front-end website using TailwindCSS & MDX.`,
          'Integrate and contribute to Django python back-end application to track generated leads for growth.',
          'Leverage third-party APIs to build interactive services like Mapbox and Stripe payment systems.',
          'Refactor and clean repo of legacy code and deprecated features to maintain high standards of code cleanliness.',
          'Monitor SEO  ranking, health,  and technical status of a website using Tag Manager, Google Analytics, and Ahrefs PaaS.',
        ],
      },
      {
        date: 'January 2021 - May 2022',
        roleTitle: 'Front End Developer',
        employer: 'White Lion Interactive',
        location: 'Austin, TX',
        description: [
          `Create stateful web applications using React that meet project requirements set forth by client's business logic.`,
          'Develop websites UI/UX, using WordPress, Advanced Custom Fields, and SASS technologies, while incorporating data from back-end SQL databases and API services',
          'Collaborate with project managers and design team to meet deadlines and achieve Sprint goals',
          'Work efficiently to complete requests by customers within budget, develop plans for completing larger projects, and suggest new solutions to improve existing websites',
          'Edit, transcribe, and produce developer documentation for onboarding new hires and team members',
        ],
      },
      // {
      //   date: 'August 2020 - January 2021',
      //   roleTitle: 'AP Computer Science Teacher',
      //   employer: 'IDEA Public School',
      //   location: 'Austin, TX',
      //   description: [
      //     'Develop JavaScript curriculum using Repl.it online classroom',
      //     'Focus learners on the fundamentals of computers - historically and current',
      //     'Engage students in hard and soft skill development for entering collaborative workforce',
      //     'Emphasis on multiple language acquisition',
      //     'Offer practice with client ethics and real world situations',
      //     'Pose question to learners regarding the role of technology in modern society',
      //   ],
      // },
      {
        date: 'August 2019 - June 2020',
        roleTitle: 'Web Developer || Curriculum Writer',
        employer: 'Hello World Studios',
        location: 'Austin, TX',
        description: [
          'Build an online platform with React to facilitate student learning and engagement',
          'Manage regional team of web development curriculum writers/developers',
          'Wrote an interactive HTML/CSS/Javascript curriculum for web learners',
          'Oversee the development and quality control for online educational resources',
          'Create online video resources through screencasting, audio engineering, and video editing knowledge base',
          'Teach remotely, in person, after school programs, and extracurricular settings',
          'Develop a curriculum for Sonic Pi, a Ruby on Rails programming environment taught in the form of music',
        ],
      },
      {
        date: ' August 2017 - July 2019',
        roleTitle: 'High School Computer Science Teacher',
        employer: 'KIPP Public Schools',
        location: 'Austin, TX',
        description: [
          'Educate low-income at risk students in fundamentals of computer science',
          'Teach JavaScript, CSS, and HTML computer programming languages',
          'Instruct students in algorithm problem solving methodology',
          'Explore application design flow using user experience feedback',
        ],
      },
    ],
    education: [
      {
        date: 'July 2017 - May 2019',
        institute: 'Austin Community College',
        degree: 'Web Developer Certificate',
        location: 'Austin, TX',
      },
      {
        date: 'August 2009 - May 2013',
        institute: 'Texas State University San Marcos',
        degree: 'Bachelor of Science in Anthropology',
        location: 'San Marcos, TX',
      },
    ],
    personalInfo: {
      name: 'Andrew Riefenstahl',
      address: 'Austin, TX 78745',
      phone: 'eight one seven 897 4 five 99',
      email: "firstname + '.riefenstahl@gmail.com'",
      age: 32,
      dOB: 'November 9th, 1988',
      heritage: ['German', 'Italian', 'Cherokee', 'Texan'],
      religion: null,
    },
  }),
};
</script>

<style lang="scss" scoped>
.resume-container {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.resume-container > * {
  margin-bottom: 3rem;
}
hr {
  width: 80%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(239, 141, 156, 0.8),
    rgba(44, 62, 81, 1),
    rgba(239, 141, 156, 0.8)
  );
}

@media screen and (min-width: 1700px) {
  .resume-container {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .resume-container {
    width: 94%;
  }
}
</style>
