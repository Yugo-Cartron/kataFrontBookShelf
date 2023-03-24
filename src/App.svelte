<script lang="ts">
  import BookShelf from "./component/BookShelf.svelte";
</script>

<main class="page">
  <div class="background"></div>
  <h1 class="app-title">
    Ugly BookShelf
  </h1>
  <BookShelf />
</main>

<style>

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 90%);
  }

  .page {
    max-width: 1280px;
  }

  h1 {
    color: white;
  }

  .app-title {
    padding: 5rem 0;
  }
</style>
