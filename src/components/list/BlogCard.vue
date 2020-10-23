<template>
  <div class="card-body">
    <router-link :to="'/blog/' + blog._id">
      <div class="cards-item">
        <div class="card">
          <div class="card-content">
            <h3 class="card-title">{{ blog.title }}</h3>
            <h4>{{ blog.topic }}</h4>
            <p class="card-text">{{ blog.summary }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
.card-body {
  width:33.3%;
  margin: 5px;
  transition: all 0.3s ease, 
}

.card-body:hover {
  transform: scale(1.03);
}

.cards_item {
  display: flex;
  padding: 1rem;
}
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // width: 33.3%;
}

.card-content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  min-height: 175px;
}

.card-title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card-text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
@media only screen and (max-width: 600px) {
  .card-body {
   width: 100%;
  }
}

@media only screen and (min-width: 600px) and (max-width: 760px) {
  .card-body {
   width: 90%;
  }
}

// @media (min-width: 56rem) {
//   .cards_item {
//     width: 33.3333%;
//   }
// }
</style>
