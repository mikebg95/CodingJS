function cigarParty(cigars, isWeekend){
  return !isWeekend ? cigars >= 40 && cigars <= 60 : cigars >= 40;
}