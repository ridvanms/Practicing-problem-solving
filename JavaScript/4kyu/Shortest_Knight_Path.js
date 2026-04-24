// Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

// For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

// For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

// (Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)


function knight(start, finish) {
  function toCoords(pos){
    const x = pos.charCodeAt(0) - "a".charCodeAt(0);
    const y = Number(pos[1]) - 1;
    return [x,y];
  }
  
  const [startX, startY] = toCoords(start);
  const [endX, endY] = toCoords(finish);
  
  const moves = [
    [2, 1], [2, -1],
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]
  ]
  
  const queue = [];
  queue.push({x: startX, y:startY, dist: 0});
  
  const visited = new Set();
  visited.add(`${startX},${startY}`);
  
  while (queue.length > 0){
    const {x,y, dist} = queue.shift();
    
    if(x === endX && y === endY){
      return dist
    }
    
    for(const [dx, dy] of moves){
      const nx = x + dx;
      const ny = y + dy;
      
      
      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8){
        const key = `${nx},${ny}`;
        
        if(!visited.has(key)){
          visited.add(key);
          queue.push({ x: nx, y: ny, dist:dist+1});
        }
      }
    }
  }
  return -1
}