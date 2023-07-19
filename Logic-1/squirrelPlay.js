function squirrelPlay(temp, isSummer){
  return isSummer ? temp >= 60 && temp <= 100 : temp >= 60 && temp <= 90;
}