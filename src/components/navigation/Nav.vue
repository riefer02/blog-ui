<template>
  <div class="nav">
    <input type="checkbox" class="nav-checkbox" id="nav-toggle" />
    <label for="nav-toggle" class="nav-btn">
      <span class="nav-icon">&nbsp;</span>
    </label>
    <div class="nav-bg">&nbsp;</div>

    <nav class="nav-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/three" class="nav-link"
            >Three</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  watch: {
    $route(to, from) {
      console.log(to, from);
      document.getElementById('nav-toggle').checked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &-checkbox {
    display: none;
  }

  &-btn {
    background-color: #1abc9c;
    height: 6rem;
    width: 6rem;
    position: fixed;
    top: 6rem;
    left: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(#000, 0.1);
    text-align: center;
    cursor: pointer;
  }

  &-bg {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    left: 6.5rem;
    background-image: radial-gradient(#ef8d9c, #ffc39e);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.47, 0.15, 0.2, 1.19);

    // transform: scale(50);
  }

  &-nav {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1500;
    opacity: 0;
    width: 0%;
    transition: all 0.8s cubic-bezier(0.47, 0.15, 0.2, 1.19);
  }

  &-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  &-item {
    margin: 1rem;
    overflow: hidden;
  }
  &-link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: #ffffff;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #ffffff 50%
      );
      background-size: 234%;
      transition: all 0.4s;
      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: #1abc9c;
      transform: translateX(1rem);
    }
  }
  &-checkbox:checked ~ &-bg {
    transform: scale(66.5);
  }
  &-checkbox:checked ~ &-nav {
    opacity: 1;
    width: 100%;
  }

  &-icon {
    position: relative;
    margin: auto;
    margin-top: 2.9rem;
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: white;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  &-btn:hover &-icon::before {
    top: -1rem;
  }
  &-btn:hover &-icon::after {
    top: 1rem;
  }

  &-checkbox:checked + &-btn &-icon {
    background-color: transparent;
  }
  &-checkbox:checked + &-btn &-icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  &-checkbox:checked + &-btn &-icon::after {
    top: 0;
    transform: rotate(-135deg);
  }

  &-checkbox:checked + &-btn {
    box-shadow: 0px 0px 50px rgba(#fff, 0.5);
  }
}
</style>
