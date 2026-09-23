const SPISOK = [true, 'bye', 8, 242, -1400, false, false, 'word', 'JS', 3.14, true,68,Symbol('test')];
const COLLECTION = { };

for (const item of SPISOK) {
  const type = typeof item; 
  if (COLLECTION [type] === undefined) {
    COLLECTION [type] = 0; 
  }
  COLLECTION [type] +=1; 
}

console.dir(COLLECTION);