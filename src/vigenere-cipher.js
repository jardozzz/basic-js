const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(x){this.indicator=x
  }

  encrypt(message,key) {
    if(arguments.length<2){
      throw new Error(123)
    }
    else if (this.indicator==false){
      let a=message.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    let b=key.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    while (a.length>b.length){
      b=b.concat(b)
    }
    for (let i=0;i<a.length;i=i+1){
      if (a[i]>-1 && a[i]<26){
        a[i]=((a[i]+b[i])%26)
      }
      else{
        b.splice(i,0,b[i])
      }
    }
    return(a.reverse().map(e=>e+65).map(e=>String.fromCodePoint(e)).join(""))
  }
  
    else{
    let a=message.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    let b=key.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    while (a.length>b.length){
      b=b.concat(b)
    }
    for (let i=0;i<a.length;i=i+1){
      if (a[i]>-1 && a[i]<26){
        a[i]=((a[i]+b[i])%26)
      }
      else{
        b.splice(i,0,b[i])
      }
    }
    return(a.map(e=>e+65).map(e=>String.fromCodePoint(e)).join(""))
  }}    

  decrypt(message,key) {
    if(arguments.length<2){
      throw new Error(123)
    }
    else if(this.indicator==false) { 
      let a=message.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    let b=key.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
    while (a.length>b.length){
      b=b.concat(b)
    }
    for (let i=0;i<a.length;i=i+1){
      if (a[i]>-1 && a[i]<26){
        a[i]=((a[i]-b[i]+26)%26)
      }
      else{
        b.splice(i,0,b[i])
      }
    }
    return(a.reverse().map(e=>e+65).map(e=>String.fromCodePoint(e)).join(""))

    }
    else {
    let a=message.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
   let b=key.toUpperCase().split("").map(e=>e.codePointAt(0)-65)
   while (a.length>b.length){
     b=b.concat(b)
   }
   for (let i=0;i<a.length;i=i+1){
     if (a[i]>-1 && a[i]<26){
       a[i]=((a[i]-b[i]+26)%26)
     }
     else{
       b.splice(i,0,b[i])
     }
   }
   return(a.map(e=>e+65).map(e=>String.fromCodePoint(e)).join(""))
  }}
 
  
}

module.exports = VigenereCipheringMachine;
