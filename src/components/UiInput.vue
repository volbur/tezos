<template>
  <div class="form__control">
    <label :for="id">{{ placeholder }}</label>
    <input
      :class="{ invalid: error, valid: isValid }"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="change"
    />
    <p class="text-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    isValid: Boolean,
    type: {
      type: String,
      default: "button",
    },
    placeholder: String,
    value: String,
    error: String,
  },
  methods: {
    change(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.form__control {
  position: relative;
}
label {
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateY(-50%);
  padding: 0 7px;
  font-size: 15px;
  line-height: 20px;
  background-color: #fff;
}
input {
  padding: 0 22px;
  width: 390px;
  height: 60px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 15px;
  line-height: 20px;
  background-color: #fff;
  color: #000000;
}
input.invalid {
  border: 1px solid #d50d0d;
}
input.valid {
  border: 1px solid #0bcd65;
}
.text-error {
  font-size: 12px;
  line-height: 15px;
  color: #d50d0d;
}
</style>