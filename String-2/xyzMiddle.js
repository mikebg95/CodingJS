function xyzMiddle(str){
  let index = (str.length - 3) / 2;
  
  if (str.length % 2 === 1) {
    return str.slice(index, index+3) === "xyz";
  }
  else {
    if (str.slice(Math.floor(index), Math.floor(index)+3) === "xyz") {
      return true;
    }
    if (str.slice(Math.ceil(index), Math.ceil(index)+3) === "xyz") {
      return true;
    }
  }
  return false;

}