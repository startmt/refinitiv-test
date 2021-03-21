const fibonacci = (num) => {
  if (num === 1) {
    return [0, 1];
  } else {
    const s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
export const isFibonacci = (num = 0) => {
  if (num > 0) {
    const array = fibonacci(num + 1);
    if (array.includes(num)) {
      return true;
    }
  }

  return false;
};
