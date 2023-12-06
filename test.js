

function sum(number) {

    let total = 0;

    for(let i = 1; i < number.length; i++) {
        total += number[i];
        console.log(total);
    }

    return total;
}

console.log(sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));