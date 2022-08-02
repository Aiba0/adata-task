<template>
  <div class="episodes">
    <h2>Episodes:</h2>
    <p v-if="loading"> Загрузка...</p>
    <p v-else-if="isNotFound">Упс, по вашему запросу ничего не найдено!</p>
      <ul v-else>
        <li v-for="episode in episodes" :key="episode.id">{{ episode.name }}</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: "List",

  props: {
    episodes: { type: Array, default: () => ([]) },
    loading: { type: Boolean, default: false },
    notFound: { type: Boolean, default: false }
  },

  computed: {
    isNotFound() {
      return !this.episodes.length
    },
  },
}
</script>

<style scoped>
.episodes {
  width: 400px;
}

h2 {
  margin-top: 50px;
}

ul li {
  margin-bottom: 5px;
}

</style>