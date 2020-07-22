// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB);

    function cleanString(str){
        return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    }

}

module.exports = anagrams;

/*

**********First solution**********

function anagrams(stringA, stringB) {
    let string1 = createMap(stringA);
    let string2 = createMap(stringB);

    function createMap(str){
        const charMap = {};

        for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
            if(charMap[char]){
                charMap[char]++;
            }else{
                charMap[char] = 1;
            }
        }

        return charMap;
    }

    if(Object.keys(string1).length !== Object.keys(string2).length){
        return false;
    }

    for(let char in string1){
        if(string1[char] !== string2[char]){
            return false;
        }
    }

    return true;
}
*/
