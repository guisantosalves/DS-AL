// log pair

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// it will iterate 100 times, because it is 10 * 10
function logPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // O(n^2) -> Quadratic time
    }
  }
}

logPairs(boxes);

// everytime it has loop nested use mutiplication