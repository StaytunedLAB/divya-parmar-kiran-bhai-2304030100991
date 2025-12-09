function fibonacciSeq(n) {
  const seq = [0, 1];

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

console.log(fibonacciSeq(10)); 
// [0,1,1,2,3,5,8,13,21,34]
