<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<Calculator />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: linear-gradient(45deg, #61dafb, #3d7eff);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
