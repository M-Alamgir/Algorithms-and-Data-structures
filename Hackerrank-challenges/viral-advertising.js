// Link to Challenge.
// https://www.hackerrank.com/challenges/strange-advertising/problem?h_r=profile

function viralAdvertising(n) {
    // n = number of days.

    let share = 5;
    let likes = 0;
    let totalLikes = 0;

    for(let i = 1; i <= n; i++){
        // daily progress

        likes = Math.floor(share/2);
        share = likes * 3;
        totalLikes += likes;
    }

    return totalLikes;

}