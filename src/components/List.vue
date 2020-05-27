<template>
  <div>
    <h1>List of items:</h1>
    <ul>
      <li v-for="(item, index) in listItems" :key="`${index}-key`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [],
    };
  },
  created() {
    this.createListItems(1);
  },
  methods: {
    createListItems(value) {
      this.listItems = [];
      for (let i = 0; i < value; i++) {
        this.listItems.push(`Item number: ${i + 1}`);
      }
    },
  },
};
</script>

<style></style>
