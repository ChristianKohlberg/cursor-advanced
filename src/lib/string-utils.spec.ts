import test from 'ava';

import {
  capitalize,
  countOccurrences,
  reverse,
  truncate,
} from './string-utils';

// Tests for capitalize
test('capitalize - should capitalize the first letter and lowercase the rest', (t) => {
  t.is(capitalize('hello'), 'Hello');
  t.is(capitalize('WORLD'), 'World');
  t.is(capitalize('hELLo wOrLD'), 'Hello world');
  t.is(capitalize('  leadingSpace'), '  leadingspace'); // Assuming leading spaces are preserved
});

test('capitalize - edge cases', (t) => {
  t.is(capitalize(''), '');
  t.is(capitalize('a'), 'A');
  t.is(capitalize('1hello'), '1hello');
});

test('capitalize - should handle null and undefined', (t) => {
  t.is(capitalize(null as any), '');
  t.is(capitalize(undefined as any), '');
});

// Tests for reverse
test('reverse - should reverse a string', (t) => {
  t.is(reverse('hello'), 'olleh');
  t.is(reverse('WORLD'), 'DLROW');
  t.is(reverse('TypeScript'), 'tpircSepyT');
});

test('reverse - edge cases', (t) => {
  t.is(reverse(''), '');
  t.is(reverse('a'), 'a');
  t.is(reverse('  spaces  '), '  secaps  ');
});

test('reverse - should handle null and undefined', (t) => {
  t.is(reverse(null as any), '');
  t.is(reverse(undefined as any), '');
});

// Tests for countOccurrences
test('countOccurrences - should count occurrences of a character', (t) => {
  t.is(countOccurrences('hello', 'l'), 2);
  t.is(countOccurrences('banana', 'a'), 3);
  t.is(countOccurrences('TypeScript', 'p'), 1);
  t.is(countOccurrences('ababab', 'aba'), 2); // substring
});

test('countOccurrences - character not found', (t) => {
  t.is(countOccurrences('hello', 'x'), 0);
  t.is(countOccurrences('', 'a'), 0);
});

test('countOccurrences - edge cases', (t) => {
  t.is(countOccurrences('aaaaa', 'a'), 5);
  t.is(countOccurrences('ababab', 'b'), 3);
  t.is(countOccurrences('Test Test Test', 'Test'), 3);
});

test('countOccurrences - should handle null and undefined inputs', (t) => {
  t.is(countOccurrences(null as any, 'a'), 0);
  t.is(countOccurrences(undefined as any, 'a'), 0);
  t.is(countOccurrences('hello', null as any), 0);
  t.is(countOccurrences('hello', undefined as any), 0);
  t.is(countOccurrences(null as any, null as any), 0);
});

test('countOccurrences - should throw error for empty search string', (t) => {
  t.throws(() => countOccurrences('hello', ''), {
    message: 'Search string cannot be empty.',
  });
});

// Tests for truncate
test('truncate - should truncate a string to a specified length', (t) => {
  t.is(truncate('hello world', 5), 'hello...');
  t.is(truncate('short', 10), 'short');
});

test('truncate - custom suffix', (t) => {
  t.is(truncate('hello world', 8, '***'), 'hello wo***');
  t.is(truncate('another example', 7, '---'), 'another---');
});

test('truncate - length less than or equal to suffix length', (t) => {
  t.is(truncate('tiny', 2, '...'), '...'); // string is shorter than suffix after truncation
  t.is(truncate('hi', 0, '...'), '...');
  t.is(truncate('hi', 2, '...'), 'hi'); // if length is enough to hold string
  t.is(truncate('hello', 3, '.....'), '.....'); // suffix longer than length
});

test('truncate - edge cases', (t) => {
  t.is(truncate('', 5), '');
  t.is(truncate('test', 0), '...');
  t.is(truncate('test', 4), 'test');
});

test('truncate - should handle null and undefined string input', (t) => {
  t.is(truncate(null as any, 5), '');
  t.is(truncate(undefined as any, 5, '...'), '');
});

test('truncate - should use default suffix if suffix is null or undefined', (t) => {
  t.is(truncate('hello world', 5, null as any), 'hello...');
  t.is(truncate('hello world', 5, undefined as any), 'hello...');
});

test('truncate - should handle negative length by returning suffix or empty', (t) => {
  t.is(truncate('hello', -5), '...');
  t.is(truncate('', -1), '');
});
