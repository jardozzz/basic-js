const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    
    let a=((new Date(date)).getMonth());
    if (arguments.length==0){
      return('Unable to determine the time of year!')
    }
    
    else if (!(date instanceof Date && !isNaN(date))){
      throw new Error(123)
    } 
    else {
      switch(a){
      case 0:
      return("winter");
      break;
      case 1:
      return("winter");
      break;
      case 11:
      return("winter");
      break;
      case 2:
      return("spring");
      break;
      case 3:
      return("spring")
      break;
      case 4:
      return("spring")
      break;
      case 5:
      return("summer")
      break;
      case 6:
      return("summer")
      break;
      case 7:
      return("summer")
      break;
      case 8:
      return("fall")
      break;
      case 9:
      return("fall")
      break;
      case 10:
      return("fall")
      break;
    }
  }
  
};
