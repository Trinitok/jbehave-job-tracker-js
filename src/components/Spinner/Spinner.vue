<template>
  <div class="loading">
    <h1>
      loading
    </h1>
    <div class="loader-gif">
      <img src="./images/dancing-vegeta.gif" />
    </div>
    <h1>
      loading
    </h1>
  </div>
</template>
<script>
export default {
  props: [
    "start"
  ],
  mounted() {
  },
  data() {
    return {
    }
  },
}
</script>
<style scoped>
  .loading {
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
  }

</style>