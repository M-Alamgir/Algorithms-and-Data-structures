// Link to Challenge.
// https://www.hackerrank.com/challenges/bon-appetit/problem?h_r=profile

function bonAppetit(bill, k, b) {
    
    const total_bill = bill.reduce((a, b) => a +b);
    const result = (total_bill - bill[k]) / 2;

    if (b === result) console.log("Bon Appetit")
    else console.log(b - result);
}
