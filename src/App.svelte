<script lang="ts">
  import Calculator from "./components/Calculator.svelte";
</script>

<Calculator />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
  :global(body) {
    --primary: #774eff;
    --secondary: #474ce7;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    margin: 0;
    padding: 0;
    font-family: "Fira Sans" ,sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
