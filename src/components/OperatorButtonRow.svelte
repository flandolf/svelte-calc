<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import OperatorButton from "./OperatorButton.svelte";

  const dispatch = createEventDispatcher();

  function onButtonClick(event: CustomEvent<string>) {
    dispatch("click", event.detail);
  }

  const operatorButtons = ["+", "-", "×", "÷", "DEL", "C"];
</script>

<div class="operator-row">
  {#each operatorButtons as button}
    <OperatorButton value={button} on:click={onButtonClick} />
  {/each}
</div>

<style>
  .operator-row {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
</style>
