<template>
  <main class="wrapper">
    <h1>Some Heading</h1>
    <p>Some content and stuff</p>
    <img class="full-bleed" alt="cute meerkat" src="/meerkat.jpg" />
  </main>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr, min(65ch, 100%), 1fr;
}
.wrapper > * {
  grid-column: 2;
}
.full-bleed {
  width: 100%;
  grid-column: 1 / 4;
}
</style>
