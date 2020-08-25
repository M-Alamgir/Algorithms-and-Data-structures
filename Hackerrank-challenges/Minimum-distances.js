function minimumDistances(a) {

    var dist=0;
    var minDist=Number.MAX_VALUE;
    for(let i=0; i<a.length-1; i++){
        for(let j=i+1; j<a.length; j++){
            if(a[i]==a[j]){
                dist= Math.abs(i-j);
                minDist= Math.min(dist,minDist);
                break;
            }
        }
    }
    if(minDist==Number.MAX_VALUE){
        return -1;
    }
    return minDist;
}


// the second solution

function minimumDistances(a) {
    let result = [];

    for(let i = 0; i < a.length; i++){
        let lastvalue = a.lastIndexOf(a[i]);

        if(lastvalue !== i){
            result.push(Math.abs(i - lastvalue));
        }
    }

    return result.length>0 ? Math.min(...result) : -1;

}