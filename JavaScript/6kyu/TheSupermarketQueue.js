function queueTime(customers, n) {
  const tills = Array(n).fill(0);
  
  for (let time of customers){
    const idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
  }
  
  return Math.max(...tills);
} 