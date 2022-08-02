<template>
  <div id="app">
    <logo />
    <search @submit="loadEpisodes"/>
    <list
        :episodes="episodes"
        :loading="loading"
    ></list>
  </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/List";
import Logo from "@/assets/logo";

export default {
  name: 'App',

  components: {Logo, List, Search},

  data() {
    return {
      episodes: [],
      loading: false,
    }
  },

  mounted() {
    this.loadEpisodes();
  },

  methods: {
    async loadEpisodes(search) {
      this.loading = true;
      try {
        const response = await this.$api.episodes.getEpisodes({
          name: search
        })
        this.episodes = response.data.results;
      } catch (err) {
        this.episodes = []
      }
      finally {
        this.loading = false;
      }
    }
  },
}
</script>

<style>
#app {
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
