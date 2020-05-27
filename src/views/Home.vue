<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Counter @updateValue="updateList" />
    <List ref="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Counter,
    List,
  },

  methods: {
    updateList(value) {
      this.$refs.list.createListItems(value);
    },
  },
};
</script>
