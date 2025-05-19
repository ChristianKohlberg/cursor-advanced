# Strongly Typed Only

## Intro

Types are helping gen AI models to steer through the code jungle. If using Javascript, you should use Typescript instead and benefit from the fact that models do love types, enums, interfaces etc. They make it possible that AI understands how different components connect to each other.

A very common way to improve code output is cursors built-in way to lint code and correct wrong imports, incomplete types etc.

Your milage may vary but mine was that results jump rocketed after I started to create even the smallest interfaces and banned the usage of the any type.

## Examples

### Example A:

- JavaScript: `let data = fetchData();` What is data? An object? A string? An array? The AI has to look at WorkspaceData or how data is used later.

- TypeScript: `let data: **UserProfile** = fetchData();` Models immediately knows data is an object conforming to the UserProfile interface. Less Ambiguity. Can `grep for UserProfile` and has decent domain knowledge acquired.

### Example B:

Models can see all possible states and can act properly or make you aware of missing edge cases.

```typescript
interface Item {
  id: number;
  status: 'active' | 'inactive' | 'pending';
}
function processItem(item: Item) {
  if (item.status === 'active') {
    /* ... */
  }
}
```
