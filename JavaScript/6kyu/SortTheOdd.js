function sortArray(array) {
  const odds = array.filter(n => n % 2 !== 0).sort((a,b) => a - b);
  
  let oddIndex = 0;
  
  return array.map(n => {
    if(n % 2 === 0) return n;
    return odds[oddIndex++];
  })
}