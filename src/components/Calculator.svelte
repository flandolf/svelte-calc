<script lang="ts">
  import Display from "./Display.svelte";
  import ButtonRow from "./ButtonRow.svelte";
  import { evaluate } from "../utils/calculator";

  let displayValue = "";
  let expression = "";

  function onButtonClick(event: CustomEvent<string>) {
    const value = event.detail;

    if (value === "C") {
      displayValue = "";
      expression = "";
    } else if (value === "=") {
      expression = displayValue;
      displayValue = evaluate(displayValue.replace("÷", "/").replace("×", "*"));
    } else {
      displayValue += value;
    }
  }
</script>

<div class="calculator">
  <Display value={displayValue} {expression} />
  <ButtonRow on:click={onButtonClick} />
</div>

<style>
  .calculator {
    background-color: #212327;
    width: 300px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
