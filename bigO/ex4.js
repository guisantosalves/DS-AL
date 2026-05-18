function exemple(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("hi");
  }
}

exemple([1, 3, 4, 5]);

// for the space complexity it's O(1)
// because it does not matter how much input it has it will be take the same space O(1)

function exempleTwo(n) {
  const test = [];
  for (let i = 0; i < n; i++) {
    test[i] = "hi";
  }
  return test;
}

exempleTwo(5); // O(n) -> because it will take more space if the input is bigger, it will take more space O(n)

// analysis the tradeoff between time and space complexity,
// if we want to save time we need to use more space,
// if we want to save space we need to use more time.
