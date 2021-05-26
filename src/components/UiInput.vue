<template>
  <div class="form__control">
    <input
      :class="{ invalid: error }"
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
  emits: ["update:value"],
  props: {
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