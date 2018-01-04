
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(toN >= fromN){
    if (fromN === toN) {
      return fromN;
    }
    return fromN + sum(fromN + 1, toN);
  }
  
}

module.exports = sum;