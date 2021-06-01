<template>
  <form class="form" @submit.prevent="submitHandler">
    <h2 class="form__title">Login</h2>
    <UiInput
      :isValid="isValidEmail"
      type="text"
      placeholder="Email"
      :error="formData.email.error"
      v-model="formData.email.value"
    ></UiInput>

    <UiInput
      :isValid="isValidPassword"
      type="password"
      placeholder="Password"
      :error="formData.password.error"
      v-model="formData.password.value"
    ></UiInput>

    <UiInput
      :isValid="isValidPasswordConfirmation"
      type="password"
      placeholder="Password confirmation"
      :error="formData.passwordConfirmation.error"
      v-model="formData.passwordConfirmation.value"
    ></UiInput>

    <button class="btn" :disabled="!isValidForm">Submit</button>
  </form>
</template>


<script>
import UiInput from "./UiInput";
export default {
  components: {
    UiInput,
  },
  data() {
    return {
      isBlur: false,
      formData: {
        email: {
          value: "",
          error: "Invalid email",
        },
        password: {
          value: "",
          error:
            "Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character.",
        },
        passwordConfirmation: {
          value: "",
          error: "Password doesn’t match",
        },
      },
    };
  },
  computed: {
    isValidEmail() {
      return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
        this.formData.email.value
      );
    },
    isValidPassword() {
      const validLength = 8;
      return this.formData.password.value.length === validLength;
    },
    isValidPasswordConfirmation() {
      if (!this.isValidPassword) return;
      return (
        this.formData.password.value ===
        this.formData.passwordConfirmation.value
      );
    },
    isValidForm() {
      return (
        this.isValidEmail &&
        this.isValidPassword &&
        this.isValidPasswordConfirmation
      );
    },
  },
  methods: {
    showAlert(text) {
      alert(text);
    },
    submitHandler() {
      if (this.isValidForm) {
        console.log("email: ", this.formData.email.value);
        console.log("password: ", this.formData.password.value);
        console.log(
          "passwordConfirmation: ",
          this.formData.passwordConfirmation.value
        );
      }
      this.showAlert("Вхід дозволено.");
    },
  },
};
</script>

<style>
.form {
  margin: 0 auto;
  padding: 37px 0 40px;
  width: 605px;
  background: #ecf4ff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}
.form__control {
  width: 390px;
  margin: 0 auto;
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
.btn:disabled {
  opacity: 0.5;
  cursor: auto;
}

/* @media (max-width: 940px) {
  .form {
    margin: 0 auto;
    padding: 37px 108px 40px;
    width: 390px;
    background: #ecf4ff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
} */
</style>
