const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth(arr) {
  {
    let x = arr.filter(i => i.constructor.name === "Array").length != 0 ? 2+ (this.calculateDepth([].concat(...arr.filter(i => i.constructor.name === "Array")))-1) : 1; 
    return (x)
  }
   }};