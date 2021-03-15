const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let a=[].concat(arr);
    if (!(arr instanceof Array)){
      throw new Error(123)
    }
    else if (a[0]=="--discard-prev" || a[0]=="--double-prev") {
     a.splice(0,1)}
     else if(a[a.length-1]=="--double-next" || a[a.length-1]=="--discard-next"){
        a.splice(a.length-1,1)
      }
     
    
    for (i=0;i<a.length;i=i+1){
      if (a[i]=="--double-next"){
        a[i]=a[i+1]
      }
      else if (a[i]=="--double-prev"){
        a[i]=a[i-1]
      }
       else if(a[i]=="--discard-prev"){
        a.splice(i-1,2,"qwertsdyerwy");
        i=i-1
      }
      else if(a[i]=="--discard-next"){
        a.splice(i,2,"qwertsdyerwy");
        i=i-1
      }
    }
    
    
    return(a.filter(e=>(e!="qwertsdyerwy" && e!=undefined)))
  }
  
/* .filter(e=>e!="qwertsdyerwy") */
