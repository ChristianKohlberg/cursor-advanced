# Copycat Tests

Useful for:

- Increasing Test Coverage aka writing tests against existing code
- TDD aka writing tests against requirements, not code

## Prompt

"Look at the test file/folder at @folder and write similar tests for @file covering these scenarios:

- Happy path / normal usage
- Edge cases (empty inputs, null/undefined, etc.)
- Error conditions and exception handling
- Boundary conditions
- Performance considerations
- Security concerns (if applicable)
- Integration points with dependencies
- Asynchronous behavior (if applicable)
- State management (if applicable)
- Resource cleanup (if applicable)

Use the same testing framework and patterns as the referenced tests. Match the style, structure and level of detail. Include appropriate assertions and error messages. Run the tests using {your test script execution}"
