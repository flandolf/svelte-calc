<script lang="ts">
  export let value: string;
  export let expression: string = "";
</script>

<div class="display {expression ? 'animation' : ''}">
  {#if expression}
    <div class="expression">{expression}</div>
    <div class="result">{value}</div>
  {:else}
    <div class="result no-expression">{value}</div>
  {/if}
</div>

<style>
  .display {
    background-color: #151515;
    color: #ffffff;
    font-size: 24px;
    padding: 15px;
    padding-top: 13px;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: auto;
    min-height: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .expression {
    font-size: 18px;
    text-align: right;
    opacity: 0;
    transform: translateY(10px);
    transition: font-size 0.2s ease-out, opacity 0.2s ease-out,
      transform 0.2s ease-out;
  }

  .result {
    font-size: 30px;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
  }

  .no-expression {
    font-size: 40px;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  /* Add keyframe animations */
  @keyframes fadeInSlideUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .display.animation .expression,
  .display.animation .result {
    animation: fadeInSlideUp 0.4s ease-out forwards;
  }
</style>
