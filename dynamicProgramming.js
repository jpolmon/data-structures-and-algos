function addTo80(n) {
  console.log(n + 80);
}

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log(cache[n]);
    } else {
      cache[n] = n + 80;
      console.log("long time");
      console.log(cache[n]);
    }
  };
}

const memoized = memoizedAddTo80();

// memoized(5);
// memoized(5);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function memoizedFib() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  };
}

const memFib = memoizedFib();

console.log(memFib(100));
