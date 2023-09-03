let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
  let modifiedString = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  result.push(modifiedString);
}

// Export  result
module.exports = result;
