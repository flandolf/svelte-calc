<script lang="ts">
  import Display from "./Display.svelte";
  import ButtonRow from "./ButtonRow.svelte";
  import evaluate  from "../utils/calculator";
  import OperatorButtonRow from "./OperatorButtonRow.svelte";

  let displayValue = "";
  let expression = "";

  function onButtonClick(event: CustomEvent<string>) {
    const value = event.detail;
    handleInput(value);
  }
  function handleInput(value: string) {
    if (value === "C") {
      displayValue = "0"; // set displayValue to "0" instead of an empty string
      expression = "";
    } else if (value === "=") {
      expression = displayValue;
      displayValue = evaluate(displayValue.replace("÷", "/").replace("×", "*"));
    } else if (value === "DEL") {
      displayValue = displayValue.slice(0, -1);
    } else {
      if (displayValue === "0") {
        // if displayValue is "0", replace it with the input value
        displayValue = value;
      } else {
        displayValue += value;
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key;
    if (key === "Enter") {
      handleInput("=");
    } else if (key === "Escape") {
      handleInput("C");
    } else if (key === "Backspace") {
      handleInput("DEL");
    } else {
      handleInput(key);
    }
  }

  $: {
    window.addEventListener("keydown", handleKeyDown);
    () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
</script>

<div class="calculator">
  <Display value={displayValue} {expression} />
  <OperatorButtonRow on:click={onButtonClick} />
  <ButtonRow on:click={onButtonClick} />
</div>

<style>
  .calculator {
    background-color: #151515;
    border-radius: 12px;
    width: 300px;
    margin: 0;
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.1);
  }
</style>
