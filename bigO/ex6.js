// hash map almost always will be the better solution

const array1 = ["a", "b", "c", "d", "e"];
const array2 = ["a", "g", "h", "i", "j"];

function hasTheSameItem(arr1, arr2) {
  const map = {};

  // building the hash map
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i]; // this will be my key
    if (!map[key]) {
      map[key] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const keyToCompare = arr2[i];
    if (map[keyToCompare]) {
      return true;
    }
  }
  return false;
}

// we can do that in another form
function hasTheSameItem2(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(hasTheSameItem2(array1, array2));
