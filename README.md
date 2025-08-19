# Roman Numeral Converter

This is a simple web application that converts Arabic numbers (integers) into Roman numerals.

## Features

- Convert numbers from **1 to 3999** into Roman numerals .
- Handles invalid input and edge cases with appropriate messages.
- Clean, responsive user interface.

## User Stories

- You should have an input element with an `id="number"`.
- You should have a button element with an `id="convert-btn"`.
- You should have an element with an `id="output"` to display results.
- Shows `"Please enter a valid number"` if no value is entered.
- Validates numbers to be within the range of **1 to 3999**.
- Correctly converts numbers to Roman numerals:
  - `9` → `IX`
  - `16` → `XVI`
  - `649` → `DCXLIX`
  - `1023` → `MXXIII`
  - `3999` → `MMMCMXCIX`
