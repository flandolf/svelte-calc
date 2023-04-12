<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  function onButtonClick(event: CustomEvent<string>) {
    dispatch("click", event.detail);
  }

  const numericButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];
</script>

<div class="numeric-row">
  {#each numericButtons as button}
    <Button value={button} on:click={onButtonClick} />
  {/each}
</div>

<style>
  .numeric-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
