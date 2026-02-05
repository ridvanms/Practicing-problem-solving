function duplicateCount(text){
  if (text == "") return 0;
  let letterCounter = {}
  for(let l of text){
    l = isNaN(l) ? l.toLowerCase() : l
    letterCounter[l] = (letterCounter[l] || 0) +1
  }

  return Object.values(letterCounter).filter(c => c > 1).length;
}