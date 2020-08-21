// Link to Challenge.
// https://www.hackerrank.com/challenges/the-hurdle-race/problem?h_r=profile

function hurdleRace(k, height) {

    let highest = Math.max(...height);

    if(k >= highest){
        return 0;
    }else{
        return Math.abs(k - highest);
    }

}