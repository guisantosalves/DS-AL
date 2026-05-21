// two sums with hash map
// arr = [2, 7, 11, 15], target = 9
// arr[i] + arr[j] = target -> arr[j] = target - arr[i]

function twoSums(arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
}

const result = twoSums([75, 3, 9, 15, 3], 6);

console.log(result);
