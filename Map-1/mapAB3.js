function mapAB3(someMap){
  if someMap.has('a') && !someMap.has('b')
    someMap.set('b', someMap.get('a'));
  
  if someMap.has('b') && !someMap.has('a')
    someMap.set('a', someMap.get('b'));
  
  return someMap;
}