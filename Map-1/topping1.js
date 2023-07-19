function topping1(someMap){
  someMap.set('bread', 'butter');
  
  if someMap.has('ice cream')
    someMap.set('ice cream', 'cherry'); 
  
  return someMap;
}