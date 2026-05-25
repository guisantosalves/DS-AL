// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
// }

function firstRecurringCharacter(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    }
    map[input[i]] = true;
  }
}

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
