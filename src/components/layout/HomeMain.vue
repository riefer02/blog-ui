<template>
  <div>
    <main class="wrapper">
      <h1 class="header-text-primary">Full Stack Developer</h1>
      <!-- <h3 class="header-test-secondary"></h3> -->
      <hr/>
      <p class="main-text">
        Hi, and welcome to my portfolio website. My name is Andrew Riefenstahl
        and I am a self-taught full stack developer. I studied anthropology when
        I was younger, and serve my community as a career educator. I began
        exploring computer science a few years back and discovered a passion I
        never knew existed. I'm creative, love to learn, a team player, and
        enjoy solving puzzles. I have many other hobbies too, so if you want to
        learn more please, "stay awhile and listen".
      </p>
      <img
        class="full-bleed giraffe-banner"
        alt="A Herd of Giraffe"
        :src="require('../../assets/images/giraffeHerd.jpg')"
      />
      <p class="main-text pt-5">
        I study many knowledge fields related to the human experience, because I
        genuinely want to grow everyday. I know that it is the little things
        that add up to a great life and we are only given just one to live. So I
        try to make the best by exploring new aspects with every turning page.
      </p>
      <hr />
    </main>
    <ResponsiveCardList :items="hobbies" />
  </div>
</template>

<script>
import ResponsiveCardList from '@/components/list/ResponsiveCardList.vue';
export default {
  components: {
    ResponsiveCardList
  },
  data: () => ({
    hobbies: [
      {
        id: 1,
        name: 'Full Stack Developer',
        summary:
          'I am a proficient full-stack developer. My favorite front-end framework is Vue.js and my backend is comprised of Express.js, MongoDB, and Node.js. I am also versed in several other stacks and technologies.',
        icon: 'layer-group' // fas
      },
      {
        id: 2,
        name: 'UX Design',
        summary:
          'I focus on fast load times, responsive layouts for any device, intuitive, easy to use UX/UI. I build dynamic websites with fun and thriving energy.',
        icon: 'bezier-curve' // fab
      },
      {
        id: 3,
        name: 'Database Engineer',
        summary:
          'I maintain servers for database storage, write complex queries, development of all server-side logic, and ensure high performance and responsiveness to requests from the front-end.',
        icon: 'server' // fas
      },
      {
        id: 4,
        name: 'Creator',
        summary:
          'I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Technologies can be learned, I prefer a good challenge myself.',
        icon: 'feather-alt' // fas
      }
    ]
  })
};
</script>

<style lang="css" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
}
.wrapper > * {
  grid-column: 2;
}

.full-bleed {
  grid-column: 1 / -1;
  width: 100%;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3.6rem;
}

.giraffe-banner {
  object-fit: cover;
  width: 100%;
  height: 325px;
  object-position: 0 -150px;
}

.header-text-primary {
  margin-top: 0;
  filter: drop-shadow(0 0 1px #ef8d9c);
}

.main-text {
  font-size: 1.2rem;
  line-height: 1.7rem;
  padding-bottom: 1.5rem;
}
@media only screen and (max-width: 600px) {
  .giraffe-banner {
    object-position: -60px -50px;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
    position: relative;
    margin: 0;
  }
  .main-text {
    margin-top: 0;
  }
}

@media only screen and (min-width: 900px) and (max-width: 1400px) {
  .full-bleed {
    margin-top: 1.3rem;
    margin-bottom: 1.9rem;
  }
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
