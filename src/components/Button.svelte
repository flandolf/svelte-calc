<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: string;

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("click", value);
  }
</script>

<button class="button" on:click={onClick}>{value}</button>

<style>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #35a4ff;
    color: #282c34;
    width: 100%;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: background-color 0.3s ease-in-out;
  }

  .button:hover {
    background-color: #3d5ab9;
  }

  .button:active {
    background-color: #3d5ab9;
  }
</style>
