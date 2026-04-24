// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n) {
  result = []
  
  function backtrack(current,open,close){
    if(current.length === 2 * n){
      result.push(current)
      return
    }
    
    if(open<n){
      backtrack(current + "(",open + 1,close);
    }
    if(close<open){
      backtrack(current + ")",open,close+1);
    }
    
  }
  
  backtrack("",0,0)
  return result;
}