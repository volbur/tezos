<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <NavBar></NavBar>
        <div class="header__container container">
          <div class="header__text">
            <img
              src="img/logo-header.png"
              alt="logo tezos"
              class="header__img-logo"
            />
            <h1 class="header__title">Tezos Ukraine</h1>
            <h2 class="header__subtitle">
              Front-end development test assignment
            </h2>
          </div>
          <CardInfo></CardInfo>
        </div>
      </div>
    </header>
    <main class="main">
      <section class="skills">
        <div class="skills__container container">
          <h2 class="skills__title">Testing skills</h2>
          <div class="skills__body">
            <ul class="skills__list skills__column1">
              <li class="skills__list-item">
                <p>Applying HTML, CSS/SASS. Markup implementation.</p>
              </li>
              <li class="skills__list-item">
                <p>
                  Applying JS. Transforming and organising data. Interactions.
                </p>
              </li>
            </ul>
            <ul class="skills__grafic skills__column2">
              <li class="skills__grafic-item">
                <h3>HTML, CSS/SASS</h3>
              </li>
              <li class="skills__grafic-item">
                <h3>TTP/REST</h3>
              </li>
              <li class="skills__grafic-item">
                <h3>JS</h3>
              </li>
              <li class="skills__grafic-item">
                <h3>Vue/React</h3>
              </li>
            </ul>
            <ul class="skills__list skills__column3">
              <li class="skills__list-item">
                <p>
                  Working with asynchronous code, HTTP and the REST architecture
                </p>
              </li>
              <li class="skills__list-item">
                <p>
                  Using one of the modern front-end frameworks either Vue or
                  React. Vue is preferable but React is also viable.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="assignment">
        <div class="assignment__container container">
          <div class="assignment__text">
            <h2 class="assignment__title">
              General description of the assignment
            </h2>
            <ul class="assignment__list">
              <li
                class="assignment__list-item"
                v-for="(item, index) in generalDescriptions"
                :key="index"
              >
                <span>0{{ index + 1 }}</span>
                <p>
                  {{ item }}
                </p>
              </li>
            </ul>
          </div>
          <div class="assignment__img">
            <img src="img/laptop.jpg" alt="laptop" />
          </div>
        </div>
      </section>
      <section class="team">
        <div class="team__container container">
          <h2 class="team__title">Our team</h2>
          <ul class="team__list">
            <li class="team__list-item">
              <img
                class="team-list-img"
                src="img/our-team1.jpg"
                alt="The speaker explains to others"
              />
              <p class="team__list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
                elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
                tempor. Amet proin sapien consequat orci, mauris.Lorem ipsu
                elit.\amet, porttitor.
              </p>
              <a href="#" class="team__list-link">Learn More</a>
            </li>
            <li class="team__list-item">
              <img
                class="team-list-img"
                src="img/our-team2.jpg"
                alt="The speaker explains to others"
              />
              <p class="team__list-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
                molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
                elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
                tempor. Amet proin sapien consequat orci, mauris.Lorem ipsu
                elit.\amet, porttitor.
              </p>
              <a href="#" class="team__list-link">Learn More</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import CardInfo from "./components/CardInfo";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    CardInfo,
    Footer,
  },
  data() {
    return {
      generalDescriptions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
    };
  },
};
</script>

<style scoped >
.nav {
  margin-bottom: 156px;
}
.header {
  padding-bottom: 160px;
  background-image: url("/img/bg-header.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.header__wrapper {
  background-color: rgba(44, 125, 247, 0.67);
  width: 100%;
}
.header__container {
  display: flex;
  justify-content: space-between;
}
.header__img-logo {
  margin-bottom: 26px;
}
.header__title {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 54px;
  line-height: 74px;
  color: #ffffff;
}
.header__subtitle {
  width: 390px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
}

.main {
  padding: 95px 0 100px;
  background-color: #f7fbff;
}

.skills {
  margin-bottom: 100px;
}

.skills__title {
  margin-bottom: 50px;
  font-size: 36px;
  line-height: 49px;
  color: #122232;
  font-weight: normal;
}

.skills__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skills__list,
.skills__grafic {
  list-style: none;
}

.skills__list-item:first-child {
  margin-bottom: 135px;
}

.skills__list-item p {
  position: relative;
  padding-left: 60px;
  width: 305px;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #000000;
}
.skills__list-item p::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url("/img/icon-check.svg") center center/cover no-repeat;
}
.skills__grafic {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 18px 18px;
  width: 436px;
  height: 436px;
  border-radius: 100%;
}
.skills__grafic-item {
  background-color: #2b7df7;
}
.skills__grafic-item:nth-child(-n + 2) {
  padding-top: 114px;
}
.skills__grafic-item:nth-last-child(-n + 2) {
  padding-top: 70px;
}
.skills__grafic-item h3 {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}

.assignment {
  margin-bottom: 100px;
}
.assignment__container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.assignment__text {
  width: 450px;
}
.assignment__img {
  width: 605px;
}
.assignment__title {
  margin-bottom: 50px;
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  color: #122232;
}
.assignment__list-item {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  padding-bottom: 16px;
  border-bottom: 2px solid #d5e4f1;
  list-style: none;
}
.assignment__list-item:last-child {
  margin-bottom: 0;
}
.assignment__list-item span {
  margin-right: 16px;
  font-size: 28px;
  line-height: 45px;
  color: #ffbf2b;
}
.assignment__list-item p {
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;

  color: #000000;
}
.team__title {
  margin-bottom: 35px;
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  color: #122232;
}
.team__list {
  display: flex;
  justify-content: space-between;
}
.team__list-item {
  text-align: right;
  width: 605px;
  list-style: none;
}
.team-list-img {
  margin-bottom: 35px;
}
.team__list-text {
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}
.team__list-link {
  display: inline-block;
  text-align: right;
  padding-right: 10px;
  font-size: 18px;
  line-height: 25px;
  color: #2c7df7;
  border-right: 2px solid #2c7df7;
}
</style>