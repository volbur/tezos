<template>
  <div class="form__control">
    <label>
      <input
        :class="{ invalid: isBlur, valid: isValid }"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="input"
        @blur="blur"
      />
      <span :class="{ show: isBlur }">{{ placeholder }}</span>
    </label>
    <p class="text-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlur: false,
    };
  },
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
    input(event) {
      this.$emit("input", event.target.value);
    },
    blur() {
      this.isBlur = true;
    },
  },
};
</script>

<style scoped>
.form__control {
  position: relative;
}
span {
  display: none;
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateY(-50%);
  padding: 0 7px;
  font-size: 15px;
  line-height: 20px;
  background: linear-gradient(
    to top,
    #fff calc(50% - 1px),
    #ecf4ff calc(50% + 1px)
  );
  color: rgba(0, 0, 0, 0.8);
}
input {
  padding: 0 22px;
  width: 390px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid transparent;
  outline: none;
  font-size: 15px;
  line-height: 20px;
  background-color: #fff;
  color: #000000;
}
input:focus + span {
  display: block;
}
input:focus {
  border-color: #d50d0d;
}
.show {
  display: block;
}
input.invalid {
  border-color: #d50d0d;
}
input.valid {
  border-color: #0bcd65;
}
.text-error {
  font-size: 12px;
  line-height: 15px;
  color: #d50d0d;
}
</style>