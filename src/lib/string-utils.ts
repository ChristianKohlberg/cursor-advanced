export function capitalize(str: string | null | undefined): string {
  if (!str) {
    return '';
  }
  if (str.length === 0) {
    return '';
  }
  const firstCharIndex = str.search(/[^\s]/);
  if (firstCharIndex === -1) {
    return str.toLowerCase();
  }
  return (
    str.substring(0, firstCharIndex) +
    str.charAt(firstCharIndex).toUpperCase() +
    str.substring(firstCharIndex + 1).toLowerCase()
  );
}

export function reverse(str: string | null | undefined): string {
  if (!str) {
    return '';
  }
  return Array.from(str).reduce((acc, char) => char + acc, '');
}

export function countOccurrences(
  str: string | null | undefined,
  searchStr: string | null | undefined
): number {
  if (!str || !searchStr) {
    return 0;
  }
  if (searchStr.length === 0) {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error('Search string cannot be empty.');
  }

  const countRecursive = (
    mainStr: string,
    subStr: string,
    startIndex: number
  ): number => {
    const index = mainStr.indexOf(subStr, startIndex);
    if (index === -1) {
      return 0;
    }
    return 1 + countRecursive(mainStr, subStr, index + subStr.length);
  };

  return countRecursive(str, searchStr, 0);
}

export function truncate(
  str: string | null | undefined,
  maxLength: number,
  suffix: string | null | undefined = '...'
): string {
  if (!str) {
    return '';
  }

  const actualSuffix = suffix === null || suffix === undefined ? '...' : suffix;

  if (maxLength < 0) {
    return str.length > 0 ? actualSuffix : '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= actualSuffix.length) {
    return actualSuffix;
  }

  return str.substring(0, maxLength - actualSuffix.length) + actualSuffix;
}
