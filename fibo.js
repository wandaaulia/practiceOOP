const fibos = [0,1];

for(let i = 0; i < 18; i++) {
    const nextFibos = fibos[i] + fibos[i+1];
    fibos.push(nextFibos);
}

console.log(fibos[fibos.length - 1])