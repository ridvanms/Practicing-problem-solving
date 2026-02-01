function order(words) {
  if(!words) return ""
  
  
  let result = [];
  let splitWords = words.split(" ")
  let numbers = splitWords.map(word => Number(word.match(/\d/)[0]));
  
  for(let i = 0;i < numbers.length;i++){
    result[numbers[i] - 1] = splitWords[i];
  }
  
  return result.join(" ")
}