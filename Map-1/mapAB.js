function mapAB(someMap){
  if someMap.has('a') && someMap.has('b') {
    let ab = someMap.get('a') + someMap.get('b');
    someMap.set('ab', ab);
  }

  return someMap;
}
