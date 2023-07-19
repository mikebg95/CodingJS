function delDel(str){
  let del = str.substring(1, 4) === "del";
  if (del) {
    return str.charAt(0) + str.substring(4);
  }
  else {
    return str;
  }
}