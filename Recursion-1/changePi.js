function changePi(str){
  if str.length === 0 
    return "";
  
  if str.slice(0, 2) === "pi"
    return "3.14" + changePi(str.slice(2));
  
  return str.charAt(0) + changePi(str.slice(1));
}