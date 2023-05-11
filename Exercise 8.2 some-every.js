// Function to check if array has at least one odd number
function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
  }
  
  // Function to check if a number has at least one zero
  function hasAZero(num) {
    return num.toString().includes('0');
  }
  
  // Function to check if array has only odd numbers
  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }
  
  // Function to check if array has no duplicate values
  function hasNoDuplicates(arr) {
    return new Set(arr).size === arr.length;
  }
  
  // Function to check if all objects in an array have a certain key
  function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
  }
  
  // Function to check if all objects in an array have a certain value for a given key
  function hasCertainValue(arr, key, value) {
    return arr.every(obj => obj[key] === value);
  }
  