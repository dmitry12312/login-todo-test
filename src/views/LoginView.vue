<template>
  <div>
    <div class="header">
      <div class="header-upper"></div>
      <div class="header-lower">
        <img class="header-logo-image" src="../assets/images/logo.png" alt="logo">
      </div>
    </div>
    <div class="body">
      <div class="background">
        <h1 class="business-analytics">Welcome to <br>Business Analytics Online</h1>
      </div>
      <div>
        <div class="login-component">
          <login-component></login-component>
        </div>
        <div class="body-content-header">
          <strong>Business Analytics</strong> — a new, convenient tool for managing and forecasting your business
          performance,
          which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
        </div>
        <div class="body-content">
          <ul class="ul-container">
            <li class="list-header">Interactive reporting</li>
            <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce
              (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect
              different aspects of business activities.</p>
            <li>Automated data updates</li>
            <p>The application automatically updates and structures the data in just 60 seconds, saving you time and
              money.</p>
            <li>Data Security</li>
            <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="upper-footer">
        <div>
          <img class="footer-logo-image" src="../assets/images/logo.png" alt="logo">
        </div>
        <div class="footer-info">
          <div class="footer-text">Terms & Conditions</div>
          <div class="footer-text">Privacy</div>
          <div class="footer-text">Notice at Collection</div>
          <div class="footer-text">CA Privacy Hub</div>
          <div class="footer-text">Contact Us</div>
          <div class="footer-text">Sitemap</div>
        </div>
      </div>
      <hr>
      <div class="lower-footer">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent";

export default {
  name: "LoginView",
  components: {LoginComponent}
}
</script>

<style lang="scss" scoped>
.header {
  height: 18vh;
}

.header-upper {
  background: #333333;
  height: 35%;
}

.header-lower {
  height: 65%;
  background: linear-gradient(180deg, #00A9E7 0%, #005B9F 100%);
}

.header-logo-image {
  width: 103px;
  height: 66px;
  margin-left: 377px;
  margin-top: 10px;
}

.background {
  display: flex;
  align-items: flex-end;
  height: 45vh;
  background-image: url('../assets/images/background.png');
  background-size: cover;
}

.business-analytics {
  font-size: 55px;
  font-weight: 400;
  line-height: 75px;
  max-width: 35%;
  margin: 0 0 30px 377px;
  color: #fff;
}

.body-content {
  max-width: 35%;
  margin-left: 377px;
  font-size: 15px;
  color: black;
}

.body-content-header {
  max-width: 35%;
  margin-left: 377px;
  font-size: 15px;
  color: black;
  margin-top: -250px;
}


.list-header {
  font-weight: bold;
}

.ul-container {
  list-style: none;
}

.ul-container > .list-header {
  padding-left: 20px;
  position: relative;
  margin: 10px;
}

.ul-container > .list-header:before {
  content: '✔';
  position: absolute;
  top: 0;
  left: 0;
  color: #0076C0;
}

.footer {
  color: #FFFFFF;
  background: #333333;
}

.upper-footer {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-left: 377px;
}

.footer-info {
  display: flex;
  flex-direction: row;
  margin-right: 200px;
}

.footer-text {
  font-size: 16px;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.footer-logo-image {
  width: 56px;
  height: 35px;
  margin-top: 25px;
}

hr {
  border: 1px solid #FFFFFF;
  margin: 0 200px 0 377px;
}

.lower-footer {
  margin: 40px 0 0 377px;
}

.login-component {
  position: relative;
  width: 20%;
  max-width: 30%;
  height: 35vh;
  left: 70%;
  top: -150px;
}
</style>