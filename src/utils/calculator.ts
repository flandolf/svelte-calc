export function evaluate(expression: string): string {
  try {
    const sanitizedExpression = expression.replace(/[^0-9+\-*/.]/g, "");

    const result = eval(sanitizedExpression);
    return result.toString();
  } catch (error) {
    return "Error";
  }
}
