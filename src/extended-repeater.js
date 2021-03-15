const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let a=new Array(options.additionRepeatTimes).fill((options.addition==null && typeof(options.addition)=="object")?"null":options.addition)
    let c=a.join(options.additionSeparator==undefined?"|":options.additionSeparator)
    let b=new Array(options.repeatTimes).fill(str+c)
    let d=b.join(options.separator==undefined?"+":options.separator)
    return(d)
 
};
