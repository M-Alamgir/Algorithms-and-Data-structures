// Link to Challenge.
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_r=profile


function jumpingOnClouds(c) {
    let jumps = 0; // total number of jumps
    let i = 0; // path

    while(true){
        if(i + 2 < c.length && c[i + 2] == 0){
            i += 2;
        }else if(i + 1 < c.length){
            i++;
        }else {
            break;
        }
        jumps++;
    }

    return jumps;

}