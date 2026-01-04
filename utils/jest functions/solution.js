// Implementation of jest-like functions using currying



// expect takes a value and returns an object with matcher methods
function expect(value) {
  return {
    toBe(matcher) {
      if (typeof matcher === 'function') {
        const result = matcher(value);
        if (result) {
          console.log(`✓ ${value} = ${matcher.description}`);
          return true;
        } else {
          console.log(`✗ ${value} != ${matcher.description}`);
          return false;
        }
      }

      if (value === matcher) {
        console.log(`✓ ${value} = ${matcher}`);
        return true;
      } else {
        console.log(`✗ ${value} != ${matcher}`);
        return false;
      }
    }
  };
}

function greaterThen(n) {
  const checker = (value) => value > n;
  checker.description = `greater than ${n}`;
  checker.threshold = n;
  return checker;
}

// Helper function for testing
function add(a, b) {
  return a + b;
}

// ============ TESTS ============
expect(add(1, 2)).toBe(greaterThen(1));
expect(add(5, 10)).toBe(greaterThen(10));
expect(add(2, 2)).toBe(greaterThen(5));


