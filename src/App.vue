<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div v-if="loading.val">
      <Spinner v-bind:loading="loading.val" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Spinner from './components/Spinner/Spinner';
export default {
  components: {
    Header,
    Spinner,
  },
  data: () => ({
    loading: {
      val: true,
    },
  }),
  provide() {
    return {
      loader: this.loading,
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #e6ecf3;
}

#nav a.router-link-exact-active {
  color: #e6ecf3;
  font-weight: bold;
}
</style>
