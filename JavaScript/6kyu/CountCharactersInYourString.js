function count(string) {
  let result = {};
  for (const char of string){
    if(char in result){
      result[char]++
    }else{
      result[char] = 1;
    }
  }
  return result;
}