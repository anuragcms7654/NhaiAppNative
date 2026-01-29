# JavaScript `+` Operator Type Coercion Cheat Sheet

This document shows common examples and rules of how JavaScript coerces types when using the `+` operator.

---

## JS `+` Operator Coercion Table

| Expression            | Step-by-Step Explanation                                   | Result                             |
| --------------------- | ---------------------------------------------------------- | ---------------------------------- |
| `[] + []`             | `[].toString() + [].toString()` → `"" + ""`                | `""` (empty string)                |
| `[] + {}`             | `[].toString() + {}.toString()` → `"" + "[object Object]"` | `"[object Object]"`                |
| `{ } + []`            | `{}` treated as block → `+[]` → `0`                        | `0` (console quirk)                |
| `[1] + [2]`           | `[1].toString() + [2].toString()` → `"1" + "2"`            | `"12"`                             |
| `[1,2] + [3,4]`       | `"1,2" + "3,4"`                                            | `"1,23,4"`                         |
| `[1] + 1`             | `[1].toString() + 1` → `"1" + "1"`                         | `"11"`                             |
| `1 + [1]`             | `1 + [1].toString()` → `1 + "1"` → `"11"`                  | `"11"`                             |
| `{ a: 1 } + { b: 2 }` | `"[object Object]" + "[object Object]"`                    | `"[object Object][object Object]"` |
| `"" + 1`              | String + number → number converted to string               | `"1"`                              |
| `0 + []`              | `[].toString()` → `""` → `0 + ""` → string concatenation   | `"0"`                              |
| `[] + null`           | `[].toString()` → `""` → `"" + "null"`                     | `"null"`                           |
| `[] + undefined`      | `[].toString()` → `""` → `"" + "undefined"`                | `"undefined"`                      |

---

## Rules to Remember

1. `+` **concatenates strings** if **any operand is a string** after coercion.
2. Objects/arrays are **converted to primitives** using `.toString()` (arrays) or `"[object Object]"` (plain objects).
3. Empty arrays → `""` (empty string).
4. `null`/`undefined` → `"null"` / `"undefined"` if concatenated with string.
5. Numbers + numbers → arithmetic addition.
6. JS can behave strangely if `{}` is interpreted as a **block instead of an object literal** (like `{} + []`).

---

## Tip

This cheat sheet is handy for **interview questions** and **debugging weird JS type coercion behavior**.

Keep it for reference whenever you see `[] + []`, `[1] + 1`, or `{}` + array/string operations.
