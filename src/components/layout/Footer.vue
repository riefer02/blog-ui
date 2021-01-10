<template>
  <footer class="site-footer">
    <div class="footer-row-1">
      <div class="footer-about">
        <h6>Nice to meet you</h6>
        <p class="footer-about-text">
          Need help building a web application, producing an album, or anything
          inbetween? Please don't hesitate to reach out.
        </p>
      </div>

      <div class="footer-links-group">
        <h6>Fast Travel</h6>
        <ul class="footer-links">
          <li class="footer-link">
            <router-link to="/blogs" @click="scrollToTop()">Blog</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/three" @click="scrollToTop()">Three</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/music" @click="scrollToTop()">Music</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/resume" @click="scrollToTop()"
              >Resume</router-link
            >
          </li>
          <li class="footer-link" @click="scrollToTop()">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr />

    <div class="footer-row-2">
      <div class="copyright">
        <p class="copyright-text">
          Copyright &copy; {{ currentYear }} <a href="#">Rief Productions</a>
        </p>
      </div>

      <div class="social-media-bar">
        <a
          href="https://github.com/riefer02"
          target="_blank"
          class="social-media-link"
          ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'github']"
        /></a>
        <a
          href="https://wa.me/18178974599?text=I'm%20found%20your%20portfolio%20site%20and%20just%20wanted%20to%20say%20hello!"
          target="_blank"
          class="social-media-link"
          ><FontAwesomeIcon
            class="social-media-icon"
            :icon="['fab', 'whatsapp']"
        /></a>
        <a
          href="https://www.instagram.com/riefer02/"
          target="_blank"
          class="social-media-link"
          ><FontAwesomeIcon
            class="social-media-icon"
            :icon="['fab', 'instagram']"
        /></a>
        <a href="https://youtu.be/erDW9qG8Vrs" class="social-media-link"
          ><FontAwesomeIcon
            class="social-media-icon"
            :icon="['fab', 'youtube']"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon,
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-row-1,
.footer-row-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.footer-row-1 {
  align-items: flex-start;
  margin-bottom: 1.7rem;
}
.footer-row-2 {
  align-items: center;
  margin-top: 1.7rem;
  margin-bottom: 0;
}
.footer-about,
.footer-links-group,
.copyright,
.social-media-bar {
  width: 33.3%;
}
.footer-about-text {
  color: #212d3a;
  font-size: 1.3rem;
  line-height: 2rem;
}
.footer-about {
  align-items: flex-end;
  text-align: right;
}

.footer-links-group {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.footer-links {
  display: flex;
  flex-direction: column;
  justify-self: start;
}

.footer-link li {
  text-align: left;
}
.site-footer {
  background: rgb(35, 162, 137);
  background: linear-gradient(
    145deg,
    rgb(54, 201, 171) 0%,
    rgba(26, 188, 156, 1) 100%
  );
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  box-shadow: 0 0px 40px -14px rgba(0, 0, 0, 0.25);
}
.site-footer hr {
  border-top-color: #2c3e51;
  opacity: 0.4;
}

.site-footer h6 {
  color: #2c3e51;
  filter: drop-shadow(0 0 1px#ffffff);
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
  margin-bottom: 1.7rem;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #fff;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
  color: #2c3e51;

  font-size: 1.7rem;
}

.footer-links li {
  margin-bottom: 0.9rem;
}
.footer-links a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #2c3e51;
  text-align: left;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #ffffff;
  text-decoration: none;
}

.copyright-text {
  margin: 0;
  color: #2c3e51;

  font-size: 1.3rem;
  padding-bottom: 1rem;
  text-align: right;
}
.copyright-text a {
  color: inherit;
  text-decoration: none;
  filter: drop-shadow(0 0 1px#ffffff);
  font-size: 1.3rem;
  font-weight: 600;
}

.social-media {
  &-bar {
    right: 15px;
    top: 20px;
    display: flex;
    justify-content: flex-start;
  }

  &-icon {
    font-size: 35px;
    color: #fff;
    transition: all 0.2s;
  }
  &-link:hover &-icon {
    color: #fff;
  }
  &-link {
    display: flex;
    background-image: linear-gradient(
      45deg,
      #ffc39e,
      rgba(239, 141, 156, 1),
      rgba(255, 195, 158, 1)
    );
    height: 38px;
    width: 38px;
    margin: 0 9px 0px 0px;
    padding: 6px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.5s;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 2px black;
  }

  &-link:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px -1px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    transform: translateY(2px) scale(0.9);
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text {
    text-align: center;
  }
}

@media only screen and (max-width: 900px) {
  .social-media {
    &-bar {
      display: flex;
    }
    &-link {
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 30px;
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .footer-about {
    text-align: center;
    width: 100%;
    order: 2;
  }
  .footer-links-group {
    width: 100%;
    order: 1;
    margin-bottom: 1.1rem;
    text-align: center;
  }
  .footer-row-1 {
    display: flex;
    flex-direction: column;
  }
  .social-media {
    &-link {
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 30px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .footer-about {
    text-align: center;
    width: 100%;
    order: 2;
  }
  .footer-links-group {
    width: 100%;
    order: 1;
    margin-bottom: 1.1rem;
    text-align: center;
  }
  .footer-row-1 {
    display: flex;
    flex-direction: column;
  }
  .footer-about-text {
    padding: 0 1.7rem;
  }

  .footer-links a {
    text-align: center;
  }

  .social-media {
    &-bar {
      z-index: 500;
    }

    &-link {
      height: 25px;
      width: 25px;
      margin: 0 2.5px;
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 25px;
    }
  }
}

@media screen and (max-width: 380px) {
  .footer-row-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-media-bar {
    margin-right: 39px;
    order: 1;
  }

  .copyright {
    padding-top: 10px;
    order: 2;
  }

  .copyright-text,
  .copyright-text a {
    font-size: 1rem;
  }
}
</style>
