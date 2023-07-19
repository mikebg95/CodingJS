function inOrderEqual(a, b, c, equalOk){
  if (equalOk) {
    return c >= b && b >= a;
  }
  else {
    return c > b && b > a;
  }
}