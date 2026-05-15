# Calculator

A fully functional browser-based calculator built with vanilla HTML, CSS, and JavaScript.

## Features

- **Basic arithmetic** — addition, subtraction, multiplication, and division
- **Chained operations** — pressing an operator after a complete expression evaluates it first, then uses the result as the first operand for the next operation
- **Decimal input** — enter floating-point numbers with the `.` button
- **Backspace (DEL)** — remove the last digit entered
- **All Clear (AC)** — wipe all state and start fresh
- **ON** — resets the calculator to its initial state
- **Divide-by-zero protection** — displays a snarky error message instead of crashing
- **Overflow prevention** — long decimal results are rounded to avoid display overflow
- **Result-then-digit** — after a result is shown, pressing a digit clears it and starts a new calculation
- **Consecutive operator guard** — pressing an operator more than once in a row without entering a second number only updates the pending operator; no premature evaluation

## Project Structure

```
Calculator/
├── index.html
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── script.js
```

## How to Use

Open `index.html` in any modern browser — no build step or dependencies required.

### Basic workflow

1. Click digit buttons to enter the first number.
2. Click an operator (`+`, `-`, `*`, `/`).
3. Enter the second number.
4. Press `=` to see the result, or press another operator to chain the next operation.

### Keyboard support

Keyboard input is not yet wired up — buttons must be clicked.

## Implementation Notes

- `operate(operator, a, b)` dispatches to individual `add`, `subtract`, `multiply`, and `divide` functions.
- State is tracked with three variables: `firstNumber`, `secondNumber`, and `operator`.
- A `resultDisplayed` flag distinguishes between a fresh entry and a post-result entry so digit presses after `=` start a new calculation rather than appending to the result.
- Results are formatted with `parseFloat(result.toFixed(10))` to trim trailing zeros while still capping decimal length.

## Requirements Checklist

- [x] `add`, `subtract`, `multiply`, `divide` functions
- [x] `operate` dispatcher
- [x] Digit and operator buttons
- [x] Live display
- [x] Clear button
- [x] Chained operations (evaluate on second operator press)
- [x] Divide-by-zero error message
- [x] Rounded decimal results
- [x] Guard against `=` with incomplete input
- [x] Consecutive operator presses do not evaluate
- [x] Result + new digit starts fresh
- [x] Decimal (`.`) button — extra credit
- [x] Backspace (DEL) button — extra credit

## License

MIT
