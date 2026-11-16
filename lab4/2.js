const max = (matrix) => {
let maxval =  -Infinity;
for (const row of matrix){
    for (const num of row){
        if (maxval<num) {
            maxval=num;
        } 
    }
  }
return maxval;
};
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

