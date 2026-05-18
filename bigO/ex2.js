function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 7; // O(1)
  let c = 8; // O(1)

  for (let i = 0; i < input; i++) { 
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }

  for (let j = 0; j < input; j++) {
    let p = j + 1; // O(n)
    let q = j + 2; // O(n)
  }
  let whoAmI = "?"; // O(1)
}

// 1 + 1 + 1
// n + n + n
// n + n
// 1

// O(4 + 5n) -> O(n)
// or O(4 + 7n) -> O(n) (if for include)