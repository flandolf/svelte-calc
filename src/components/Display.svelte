<script lang="ts">
  export let value: string;
  export let expression: string = "";
</script>

<div class="display">
  <div class="expression">{expression}</div>
  <div class="result">{value}</div>
</div>

<style>
  .display {
    background-color: #25282c;
    color: #ffffff;
    font-size: 24px;
    padding: 15px;
    padding-top: 5px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-height: 1.5em;
    max-height: 2em;
  }

  .expression {
    font-size: 18px;
    text-align: right;
    margin-bottom: 5px;
  }

  .result {
    font-size: 24px;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
