module.exports = function getZerosCount(number) {
  // your implementation
  let res = 0;
  while (number >= 5) {
    number = Math.floor(number/5);
    res += number; 
  }
  
  return res;
}
