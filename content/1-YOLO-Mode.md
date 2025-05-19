# You Only Look Once Mode

Describes a simple case where AI can work as an autonomous agent without human feedback until completion.

Note: Should still be monitored with one eye - has a risk of running into a rabbit hole loop.

## Task Description

Create a utility module that provides the following string manipulation functions:

1. `capitalize(str: string): string` - Capitalizes the first letter of a string and converts the rest to lowercase
2. `reverse(str: string): string` - Reverses a string
3. `countOccurrences(str: string, char: string): number` - Counts the occurrences of a character in a string
4. `truncate(str: string, length: number, suffix: string = '...'): string` - Truncates a string to specified length and adds a suffix if the string exceeds that length

## Requirements

- All functions must handle empty strings appropriately
- All functions must handle edge cases (null, undefined) without crashing
- Implementation should be efficient and follow best practices
- Must include comprehensive tests

## Prompt

Create TypeScript tests for a string utility module with functions: capitalize, reverse, countOccurrences, and truncate. Write comprehensive tests using AVA that check normal cases, edge cases, and error handling. Tests should verify that capitalize makes the first letter uppercase and rest lowercase, reverse correctly inverts strings, countOccurrences accurately counts character appearances, and truncate properly shortens strings with optional suffix. Create these in a string-utils.spec.ts file.

Implement a TypeScript string utility module based on the tests created earlier. Create functions for capitalize, reverse, countOccurrences, and truncate. Make sure the implementation handles all edge cases covered in the tests, including empty strings and null/undefined inputs. Optimize for performance and follow TypeScript best practices. Create this in a string-utils.ts file.

Run the tests using `npm run test` and verify correctness after you implemented the requirements. Iterate for as long as you need and auto execute npm run test to inspect results. You can execute `npm run test` as command, even in your sandbox. The files need to go to /src/lib/ and you dont need to setup anything else as this is already taken care of.
