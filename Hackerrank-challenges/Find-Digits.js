// Link to Challenge.
// https://www.hackerrank.com/challenges/find-digits/problem?h_r=profile

function findDigits(n) {
    let digits = n.toString();
    let divisor = 0;

    for(let i = 0; i < digits.length; i++) {

        if(digits[i] != 0 && n % digits[i] === 0){
            divisor += 1;
        }
    }

    return divisor;
}
