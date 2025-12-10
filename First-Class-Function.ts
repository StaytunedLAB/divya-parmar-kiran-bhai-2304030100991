const mathOperations: Record<string, (a: number, b: number) => number> = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  power: (x, y) => Math.pow(x, y),
};


function calculate(operation: keyof typeof mathOperations, a: number, b: number): number {
  const fn = mathOperations[operation];
  if (fn) {
    return fn(a, b);
  }
  throw new Error(`Unknown operation: ${operation}`);
}
console.log(calculate("add", 10, 5));     
console.log(calculate("power", 2, 3));    