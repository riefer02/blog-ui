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
      'Vue',
      'React',
      'GraphQL',
      'Github',
      'Node',
      'PostgreSQL',
      'MongoDB',
      'Express',
      'Redux',
      'Data Modeling',
      'Data Security',
      'NoSQL',
      'Web  Applications',
      'Heroku',
      'DNS Management',
      'Advanced CSS3',
      'Responsive Design',
      'Bootstrap',
      'SASS',
      'SCSS',
      'Tailwind',
      'Ant',
      'Javascript',
      'Jquery',
      'PHP',
      'Visual Code Studio',
      'Adobe Premiere Pro',
      'Photoshop',
      'Media Encoder',
      'Cubase 10',
      'Docker',
      'and more...',
    ],
    summary:
      'I am a freelance Full Stack Developer who builds problem-solving web applications and high-fidelity UX to drive growth and goal acquisition. I am a fast learner of new technologies, a strong grasp of computer science fundamentals, algorithmic logic, frontend frameworks, database management, and more. I am an experienced, results-oriented leader in person, remote, and professional communities.',
    links: [
      // {
      //   name: 'LinkedIn',
      //   link: 'https://www.linkedin.com/in/andrewriefenstahl'
      // },
      { name: 'YouTube', link: 'https://youtu.be/erDW9qG8Vrs' },
      { name: 'GitHub', link: 'https://github.com/riefer02' },
      { name: 'Instagram', link: 'https://www.instagram.com/riefer02' },
    ],
    experience: [
      {
        date: 'August 2019 - November 2020',
        roleTitle: 'Full-Stack Software Engineer',
        employer: 'MS Assistance',
        location: 'Austin, TX',
        description: [
          'Built front-end applications using React, Redux, and Electrode',
          'Write maintainable React Components',
          'Contribute, maintain React component library',
          'Maintain existing APIs written in NodeJS',
          'Oversee automated testing and provide feedback to management during development process',
          'Modify and test changes to previously developed programs',
          'Maintain and upgrade software following deployment',
        ],
      },
      {
        date: 'May 2018 - April 2019',
        roleTitle: 'UX Developer',
        employer: 'NIC Inc.',
        location: 'Olathe, KS',
        description: [
          'Built front-end applications using React/Redux',
          'Set guidelines, best practices to help achieve better code',
          'Fine-tune front-end build process using Webpack, Nodejs',
          'Write maintainable React components',
          'Interact with UX, backend developers to build applications',
          'Work with RESTful APIs',
        ],
      },
      {
        date: 'May 2017 - May 2018',
        roleTitle: 'Software Engineer',
        employer: 'General Electric',
        location: 'Boston, MA',
        description: [
          'Built large-scale front-end architecture using React, Redux, and ES6',
          'Scalable and maintainable CSS, and tooling to facilitate scalability',
          'Front-end build processes using Webpack, Node.js',
          'Javascript unit testing',
          'Used principles and practice of responsive web development (grid, flex-box), accessibility',
          'Maintained close communication with UI/UX team to enhance product quality',
          'Followed Agile development and consistently delivered new features on time during sprints',
          'Maintain brand standards under company guidelines',
        ],
      },
      {
        date: 'June 2012 - May 2017',
        roleTitle: 'Senior Analyst',
        employer: 'CVS',
        location: 'Woonsocket, RI',
        description: [
          'Utilized MVC principles to ensure a clean architecture and a lean code base for maximum optimation',
          'Maintained close communication with UI/UX team to enhance product quality',
          'Followed Agile development and consistently delivered new features on time during sprints',
          'Drafted UI design documents for applications',
          'Solved problems using a combination of JavaScript, JSON, and jQuery',
          'Developed application to access JSON from RESTful web service',
          'Tested front-end code in multiple browsers to ensure cross-browser compatibility',
        ],
      },
      // {
      //   date: 'August 2020 - Present',
      //   roleTitle: 'AP Computer Science Teacher',
      //   employer: 'IDEA Public School',
      //   location: 'Austin, TX',
      //   description: [
      //     'Develops  JavaScript curriculum using Repl.it online classroom',
      //     'Focuses learners on the fundamentals of computers - historically and current, Instructs from a debugging ideologic stand point',
      //     'Engages students in hard and soft skill development for entering collaborative workforce.',
      //     'Emphasis on multiple language acquisition',
      //     'Offers practice with client ethics and real world situations',
      //     'Poses question to learners regarding the role of technology in modern society.'
      //   ]
      // },
      // {
      //   date: 'August 2019 - June 2020',
      //   roleTitle: 'Web Developer || Curriculum Writer',
      //   employer: 'Hello World Studios',
      //   location: 'Austin, TX',
      //   description: [
      //     'Built an online platform to facilitate student learning and engagement',
      //     'Managed regional team of web development curriculum writers/developers',
      //     'Wrote an interactive HTML/CSS/Javascript curriculum for web learners',
      //     'Oversaw the development and quality control for online educational resources',
      //     'Created online video resources through screencasting, audio engineering, and video editing knowledge base.',
      //     'Taught remotely, in person, after school programs, and extracurricular settings',
      //     'Developed a curriculum for Sonic Pi, a Ruby programming playground taught in the form of music'
      //   ]
      // },
      // {
      //   date: ' August 2017 - July 2019',
      //   roleTitle: 'High School Computer Science Teacher',
      //   employer: 'KIPP Public Schools',
      //   location: 'Austin, TX',
      //   description: [
      //     'Educated low-income at risk students in fundamentals of computer science',
      //     'Taught JavaScript, CSS, and HTML computer programming languages',
      //     'Instructed students in algorithm problem solving methodology',
      //     'Explored application design flow using user experience feedback'
      //   ]
      // }
    ],
    education: [
      {
        date: '2009 - 2012',
        institute: 'Texas State University, San Marcos, TX',
        degree: 'Bachelor of Science, Computer Science',
      },
      // {
      //   date: 'July 2017 - May 2019',
      //   institute: 'Austin Community College',
      //   degree: 'Web Developer Certificate'
      // },
      // {
      //   date: 'August 2009 - May 2013',
      //   institute: 'Texas State University San Marcos',
      //   degree: 'Bachelor of Science in Anthropology'
      // }
    ],
    personalInfo: {
      name: 'Andrew Riefenstahl',
      address: 'Austin, TX 78745',
      phone: 'eight one seven-897-4599',
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
