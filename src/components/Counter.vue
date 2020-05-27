<template>
  <div>
    <p>Counter value:</p>
    <h1>{{ value }}</h1>
    <button class="incrementbutton" @click="increment">INCREMENT</button>
    <button class="decrementbutton" @click="decrement">DECREMENT</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    increment() {
      this.value += 1;
      this.emit();
    },
    decrement() {
      this.value -= 1;
      this.emit();
    },
    emit() {
      this.$emit("updateValue", this.value);
    },
  },
};
</script>

<style></style>
