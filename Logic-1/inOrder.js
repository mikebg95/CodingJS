function inOrder(a, b, c, bOk){
  if (bOk) {
    return c > b;
  }
  return c > b && b > a;
}