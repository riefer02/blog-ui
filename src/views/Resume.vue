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
    SummaryInfo
  },
  data: () => ({
    knowledges: [
      'WordPress',
      'Vue',
      'React',
      'EJS',
      'GraphQL',
      'Github',
      'Node',
      'PostgreSQL',
      'MongoDB',
      'Express',
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
      'Javascript',
      'Jquery',
      'PHP',
      'Visual Code Studio',
      'Adobe Premiere Pro',
      'Photoshop',
      'Media Encoder',
      'Cubase 10',
      'and more...'
    ],
    summary:
      'I am a freelance Full Stack Developer and Educator who creates web applications. I like to make high-fidelity online digital media to drive growth. I am a fast learner of new technologies with a grasp of computer science fundamentals, algorithmic logic, frontend frameworks, database management, and more. I am an experienced, results-oriented leader in person, remotely, and professional community.',
    links: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andrewriefenstahl'
      },
      { name: 'YouTube', link: 'https://www.youtube.com/riefer02' },
      { name: 'GitHub', link: 'https://github.com/riefer02' },
      { name: 'Instagram', link: 'https://www.instagram.com/riefer02' }
    ],
    experience: [
      {
        date: 'August 2020 - Present',
        roleTitle: 'AP Computer Science Teacher',
        employer: 'IDEA Public School',
        location: 'Austin, TX',
        description: [
          'Develops  JavaScript curriculum using Repl.it online classroom',
          'Focuses learners on the fundamentals of computers - historically and current, Instructs from a debugging ideologic stand point',
          'Engages students in hard and soft skill development for entering collaborative workforce.',
          'Emphasis on multiple language acquisition',
          'Offers practice with client ethics and real world situations',
          'Poses question to learners regarding the role of technology in modern society.'
        ]
      },
      {
        date: 'August 2019 - June 2020',
        roleTitle: 'Web Developer/Curriculum Writer',
        employer: 'Hello World Studios',
        location: 'Austin, TX',
        description: [
          'Built an online platform to facilitate student learning and engagement',
          'Managed regional team of web development curriculum writers/developers',
          'Wrote an interactive HTML/CSS/Javascript curriculum for web learners',
          'Oversaw the development and quality control for online educational resources',
          'Created online video resources through screencasting, audio engineering, and video editing knowledge base.',
          'Taught remotely, in person, after school programs, and extracurricular settings',
          'Developed a curriculum for Sonic Pi, a Ruby programming playground taught in the form of music'
        ]
      },
      {
        date: ' August 2017 - July 2019',
        roleTitle: 'High School Computer Science Teacher',
        employer: 'KIPP Public Schools',
        location: 'Austin, TX',
        description: [
          'Educated low-income at risk students in fundamentals of computer science',
          'Taught JavaScript, CSS, and HTML computer programming languages',
          'Instructed students in algorithm problem solving methodology',
          'Explored application design flow using user experience feedback'
        ]
      }
    ],
    education: [
      {
        date: 'July 2017 - May 2019',
        institute: 'Austin Community College',
        degree: 'Web Developer Certificate'
      },
      {
        date: 'August 2009 - May 2013',
        institute: 'Texas State University San Marcos',
        degree: 'Bachelor of Science in Anthropology'
      }
    ],
    personalInfo: {
      name: 'Andrew Riefenstahl',
      address: 'Austin, TX 78745',
      phone: 'eight one seven-897-4599',
      email: 'andrew.riefenstahl@gmail.com',
      age: 32,
      dOB: 'November 9th, 1988',
      heritage: ['German', 'Italian', 'Cherokee', 'Texan'],
      religion: null
    }
  })
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
</style>
