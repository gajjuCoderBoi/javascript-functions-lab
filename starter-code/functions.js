// Question 1
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) return num1;
    return num2;
}

function maxOfTwoNumbers(num1, num2) {
    return num1>num2?num1 : num2;
}

// Question 2
function maxOfThree(a,b,c) {
    if (a>b && a>c) return a;
    else if(b>a && b>c) return b;
    else return c;
}

// Question 3
function isCharacterAVowel(char) {
    switch (char.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': return true;
        default: return false;
    }
}

// Question 4: Part 1
function sumArray(arr) {
    let sum=0;
    arr.forEach(elem=>{
        sum+=elem;
    });
    return sum;
}

// Question 4: Part 2
function multiplyArray(arr) {
    let mul=0;
    arr.forEach(elem=>{
        mul*=elem;
    });
    return mul;
}

// Question 5
const numberOfArguments = function(...args) {
    return args.length;
};

// Question 6
const reverseString = function(str) {
    return str.reverse();
};

// Question 6
const reverseString = function(str) {
    let newStr = "";
    for (let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    return newStr;
};

// Question 7
function findLongestWord(arr) {
    let longest = arr[0].length;
    arr.forEach(elem=>{
        longest = longest<elem.length ? elem.length : longest;
    });
    return longest;
}

// Question 8
function filterLongWords(words, i) {
    let longWords = [];
    words.forEach(elem=>{
        if (elem.length > i) longWords.push(elem);
    })
    return longWords;
}

function filterLongWords(words, i) {
    return words.filter(word=>word.length>i)

}

// Bonus 1
function charactersOccurencesCount(str) {
    let obj = {};
    for (let i=0;i<str;i++){

    }
}
