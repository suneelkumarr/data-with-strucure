// Frequency Counter - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time - O(n), Space - O(n)

function areThereDuplicates(...args) {
  if (!args.length) return false;

  const lookup = {};

  for (let item of args) {
    if (lookup[item]) return true;
    lookup[item] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true