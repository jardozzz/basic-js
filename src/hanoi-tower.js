const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a=((2**disksNumber)-1);
  let b=Math.floor(a*3600/turnsSpeed);
  let object={
    turns:a,
    seconds :b
  }
  return(object)
};
