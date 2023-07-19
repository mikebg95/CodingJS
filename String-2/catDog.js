function catDog(str){
  let catSum = 0, dogSum = 0, i = 0;
  
  while (i < str.length - 2) {
    switch str.slice(i, i+3) {
      case "dog"
        dogSum++;
        break;
      case "cat"
        catSum++;
        break;
    }

    i++;
  }
  
  return dogSum === catSum;
}