// link
// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies


// first solution
function beautifulDays(i, j, k) {
    //i = starting day number
    //j = ending at number
    //k = divisor

    let count = 0;

    for(let x=i; x <= j; x++){
        let y = x.toString().split('').reverse().join('');

        let sol = Math.abs(x - y);

        if(sol%k == 0){
            count+=1;
        }

    }

    return count;

}

// second solution

function beautifulDays(i, j, k) {
    //i = starting day number
    //j = ending at number
    //k = divisor

    let count = 0;

    for(let x=i; x <= j; x++){
        let y = x.toString().split('').reverse().join('');

        let sol = Math.abs((x - y) / k);

        if(Number.isInteger(sol)){
            count += 1;
        }

    }

    return count;

}