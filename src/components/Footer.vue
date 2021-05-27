<template>
  <footer class="footer">
    <div class="container">
      <NavBar></NavBar>
      <div class="footer__links-wrapper">
        <div class="footer__links">
          <ul class="footer-links-left">
            <li class="footer-link-left"><a href="#">Testing skills</a></li>
            <li class="footer-link-left">
              <a href="#">General description of the assignment</a>
            </li>
            <li class="footer-link-left"><a href="#">Our team</a></li>
          </ul>
          <ul class="footer-links-right">
            <li class="footer-link-right"><a href="#">About us</a></li>
            <li class="footer-link-right">
              <a href="#">Carrier</a>
            </li>
            <li class="footer-link-right"><a href="#">Blog</a></li>
          </ul>
        </div>
        <a href="#" class="footer__copyright">(C)Copyright</a>
      </div>
    </div>
  </footer>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.footer {
  padding: 20px 0 30px;
  background-color: #2b7df7;
}
.footer .nav-bar {
  margin-bottom: 20px;
}
.footer__links-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.footer__links {
  display: flex;
}
.footer-links-left,
.footer-links-right {
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-link-left:not(:last-child),
.footer-link-right:not(:last-child) {
  margin-bottom: 11px;
}
.footer-links-left {
  margin-right: 90px;
}
.footer-links-left a,
.footer-links-right a {
  text-decoration: none;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}
.footer__copyright {
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-decoration: none;
}
</style>
  