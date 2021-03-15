const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length
   
   
  },
  addLink(value) {
    if ( arguments.length<1){
      value=" "
    }
   this.chain=this.chain.concat(["( "+value+ " )"]);
   return this
  },
  removeLink(position) {
  if(position>0 && position<this.chain.length && Number.isInteger(position)){
    this.chain.splice(position-1,1)
    return this
  }
  else{
    this.chain=[];
    throw new Error(123)
  }
  },
  reverseChain() {
  this.chain=this.chain.reverse()
  return this
  },
  finishChain() {
    let a="";
    a=this.chain.join("~~");
    this.chain=[];
    return (a)
    
  }
 
  };
  console.log((chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({0: 'first', 1: 'second', 'length': 2}).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain()));



module.exports = chainMaker;
