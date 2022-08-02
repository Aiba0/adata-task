<template>
    <label class="search">
      <input
          v-model.trim="search"
          @keyup="submitHandler"
          type="text"
          placeholder="Поиск по эпизодам..."
      >
    </label>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: '',
    }
  },

  methods: {
    submitHandler() {
      this.$emit('submit', this.search)
    },
  },
}
</script>

<style scoped>
input {
  margin-top: 50px;
  width: 400px;
  padding: 10px 15px;
}

</style>