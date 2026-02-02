function findUniq(arr) {
  const [a,b,c] = arr;
  
  let common = (a === b || a === c) ? a:b;
  
  for(let n of arr){
    if(n !== common) return n;
  }
}