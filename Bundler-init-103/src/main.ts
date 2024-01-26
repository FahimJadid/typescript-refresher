function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5);
sum(1, 2);
