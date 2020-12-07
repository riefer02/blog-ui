<template>
  <div>
    <KnowledgeInfo :knowledges="knowledges" />
    <SummaryInfo :summary="summary" />
    <LinksInfo :links="links" />
    <ExperienceInfo :experience="experience" />
    <EducationInfo :education="education" />
    <PersonalInfo :personalInfo="personalInfo" />
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
      'I am a freelance Full Stack Developer and Educator who creates web applications and high-fidelity online digital media to drive growth and goal acquisition. I am a fast learner of new technologies, a strong grasp of computer science fundamentals, algorithmic logic, frontend frameworks, database management, and more. I am an experienced, results-oriented leader in person, remote, and professional communities.',
    links: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/andrewriefenstahl'
      },
      { name: 'Email', link: 'andrew.riefenstahl@gmail.com' },
      { name: 'YouTube', link: '' },
      { name: 'GitHub', link: 'https://github.com/riefer02' }
    ],
    experience: [
      {
        date: 'August 2020 - Present',
        roleTitle: 'AP Computer Science Teacher',
        employer: 'IDEA Public School',
        location: 'Austin, TX',
        description: [
          'Develops curriculum, focused on the fundamentals of computer science, ranging from debugging skills, language acquisition, client ethics, and the role of technology in modern society.'
        ]
      },
      {
        date: 'August 2019-June 2020',
        roleTitle: 'Web Developer/Curriculum Writer',
        employer: 'Hello World Studios',
        location: 'Austin, TX',
        description: [
          'Build an online platform to facilitate student learning and engagement',
          'Manages the regional team of web development curriculum writers/developers',
          'Writes an interactive HTML/CSS/Javascript curriculum for web learners',
          'Oversees the development and quality control for online educational resources',
          'Creates online video resources through screencasting, audio engineering, and video editing knowledge base.',
          'Teaches in remotely, classrooms, extracurricular settings, and after school programs',
          'Develops a curriculum for Sonic Pi, a Ruby programming playground taught in the form of music'
        ]
      },
      {
        date: ' August 2017- July 2019',
        roleTitle: 'High School Computer Science Teacher',
        employer: 'KIPP Public Schools',
        location: 'Austin, TX',
        description: [
          'Educate low-income at risk students in fundamentals of computer science',
          'Teach JavaScript, CSS, and HTML and algorithm problem solving'
        ]
      }
    ],
    education: [
      {
        date: 'July 2017- May 2019',
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
      phone: '817-897-4599',
      email: 'andrew.riefenstahl@gmail.com',
      age: 32,
      dOB: 'November 9th, 1988',
      heritage: ['German', 'Italian', 'Cherokee', 'Texan'],
      religion: null
    }
  })
};
</script>

<style lang="scss" scoped></style>
