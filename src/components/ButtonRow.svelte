<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Button from './Button.svelte';
  
    const dispatch = createEventDispatcher();
  
    function onButtonClick(event: CustomEvent<string>) {
      dispatch('click', event.detail);
    }
    
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ];
  </script>
  
  <style>
    .button-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
  </style>
  
  <div class="button-row">
    {#each buttons as button}
      <Button value="{button}" on:click="{onButtonClick}" />
    {/each}
  </div>
  