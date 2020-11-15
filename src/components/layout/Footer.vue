<template>
  <footer class="site-footer">
    <div class="footer-row-1">
      <div class="footer-about">
        <h6>About</h6>
        <p class="footer-about-text">
          Need help building a web application, producing an album, or anything
          inbetween? Please don't hesitate to reach out.
        </p>
      </div>

      <div class="footer-links-group">
        <h6>Fast Travel</h6>
        <ul class="footer-links">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Three</a></li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li><a href="#">Giraffe</a></li>
        </ul>
      </div>
    </div>
    <hr />

    <div class="footer-row-2">
      <div class="copyright">
        <p class="copyright-text">
          Copyright &copy; {{ currentYear }} <a href="#">Rief Productions</a>.
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
        <a href="#" class="social-media-link"
          ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'youtube']"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-row-1,
.footer-row-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 rem;
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
  color: #2c3e51;
  filter: drop-shadow(0 0 1px#ffffff);
  font-size: 1.5rem;
  line-height: 2rem;
}
.footer-about {
  align-items: flex-end;
}

.footer-links-group {
  width: 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.site-footer {
  background-color: #1abc9c;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  box-shadow: 0 0px 40px -14px rgba(0, 0, 0, 0.25);
}
.site-footer hr {
  border-top-color: #2c3e51;
  opacity: 0.2;
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
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
  color: #2c3e51;
  filter: drop-shadow(0 0 1px#ffffff);
  font-size: 1.7rem;
}
@media only screen and (max-width: 600px) {
  .footer-row-1 {
    display: flex;
    flex-direction: column;
  }
  .footer-about {
    width: 100%;
    order: 2;
  }
  .footer-about-text {
    padding: 0 1.7rem;
  }
  .footer-links-group {
    width: 100%;
    order: 1;
    margin-bottom: 1.1rem;
  }
}
.footer-links li {
  margin-bottom: 0.9rem;
}
.footer-links a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #2c3e51;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

.copyright-text {
  margin: 0;
  color: #2c3e51;
  filter: drop-shadow(0 0 1px#ffffff);
  font-size: 1.2rem;
  padding-bottom: 1rem;
}
.copyright-text a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text {
    text-align: center;
  }
}

.social-media {
  &-bar {
    right: 15px;
    top: 20px;
    display: flex;
    justify-content: center;
  }

  &-icon {
    font-size: 35px;
    // color: rgba(26, 188, 156, 1);
    color: rgba(44, 62, 81, 1);
    transition: all 0.5s;
  }
  &-link:hover &-icon {
    color: #fff;
  }
  // rgba(239, 141, 156, 1)
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
    margin: 0 8px;
    padding: 6px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(239, 141, 156, 0.7);
    transition: transform 0.5s;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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
</style>
