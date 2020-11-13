<template>
  <main class="wrapper">
    <h1 class="header-text-primary">Full Stack Developer</h1>
    <!-- <h3 class="header-test-secondary"></h3> -->
    <p class="main-text">
      Hi, and welcome to my portfolio website. My name is Andrew Riefenstahl and
      I am a self-taught full stack developer. I studied anthropology when I was
      younger, and serve my community as a career educator. I began exploring
      computer science a few years back and discovered a passion I never knew
      existed. I'm creative, love to learn, a team player, and enjoy solving
      puzzles. I have many other hobbies too, so if you want
      to learn more please, "stay awhile and listen".
    </p>

    <img
      class="full-bleed giraffe-banner"
      alt="A Herd of Giraffe"
      :src="require('../../assets/images/giraffeHerd.jpg')"
    />
  </main>
</template>

<script>
export default {};
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

@media only screen and (max-width: 600px) {
  .giraffe-banner {
    object-position: -60px -50px;
  }
}

.main-text {
  font-size: 1.2rem;
  line-height: 1.7rem;
  padding-bottom: 1.5rem;
}
</style>
