<template>
  <div class="form__control">
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="change"
    />
    <p class="text-error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    type: String,
    placeholder: String,
    id: String,
    modelValue: String,
    error: String,
  },
  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
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
.text-error {
  font-size: 12px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.63);
}
</style>