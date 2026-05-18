const arrr = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "nemo",
];

const large = new Array(100000).fill("nemo");

// to go through an array of 100000 items, it took 3430.4382ms
function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("found nemo");
      break;
    }
  }
}

// O(1) -> it does not matter how much input it has it will be take the same time O(1)
function exemple(arr) {
  console.log(arr[0]);
}

findNemo(large); // O(N) -> LINEAR TIME
