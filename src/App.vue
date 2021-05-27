<template>
  <form class="form" @submit.prevent="submitHandler">
    <h2 class="form__title">Login</h2>
    <ui-input
      :isValid="valid.email"
      type="text"
      placeholder="Email"
      :error="errors.email"
      v-model="email"
    ></ui-input>

    <ui-input
      :isValid="valid.password"
      type="password"
      placeholder="Password"
      :error="errors.password"
      v-model="password"
    ></ui-input>

    <ui-input
      :isValid="valid.passwordConfirmation"
      type="password"
      placeholder="Password confirmation"
      :error="errors.passwordConfirmation"
      v-model="passwordConfirmation"
    ></ui-input>

    <button class="btn" type="submit">Submit</button>
  </form>
</template>


<script>
import UiInput from "./components/UiInput";
export default {
  name: "App",
  data() {
    return {
      valid: {
        email: false,
        password: false,
        passwordConfirmation: false,
      },
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  computed: {
    isValidEmail() {
      const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
        this.email
      );

      return isValid;
    },
    isValidPassword() {
      return this.password === "2";
    },
    isValidPasswordConfirmation() {
      if (!this.isValidPassword) return false;
      return this.password === this.passwordConfirmation;
    },
    isValidForm() {
      const result =
        this.isValidEmail &&
        this.isValidPassword &&
        this.isValidPasswordConfirmation;

      return result;
    },
  },
  methods: {
    submitHandler() {
      this.valid.email = this.isValidEmail ? true : false;
      this.valid.password = this.isValidPassword ? true : false;
      this.valid.passwordConfirmation = this.isValidPasswordConfirmation
        ? true
        : false;

      this.errors.email = this.isValidEmail ? "" : "Invalid email";
      this.errors.password = this.isValidPassword
        ? ""
        : "Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character.";
      this.errors.passwordConfirmation = this.isValidPasswordConfirmation
        ? ""
        : "Password doesn’t match";

      if (this.isValidForm) {
        console.log("email: ", this.email);
        console.log("password: ", this.password);
        console.log("passwordConfirmation: ", this.passwordConfirmation);
      }
    },
  },
  components: {
    UiInput,
  },
};
</script>

<style>
.form {
  margin: 0 auto;
  padding: 37px 108px 40px;
  width: 390px;
  background: #ecf4ff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.form__control:not(:last-child) {
  margin-bottom: 30px;
}
.form__title {
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  color: #122232;
}
.btn {
  display: block;
  margin: 0 auto;
  padding: 11px 80px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  background-color: #ffbf2b;
  color: #fff;
  cursor: pointer;
}
</style>
