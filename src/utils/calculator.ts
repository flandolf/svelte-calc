function evaluate(expression: string): string {
  expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
  const regex = /^[^a-zA-Z]*$/;
  if (!regex.test(expression)) {
    return "Invalid expression";
  }
  console.log("expression", expression)
  const result = eval(expression);
  return result.toString();
}

export default evaluate;
