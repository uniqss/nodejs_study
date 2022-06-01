console.log("hello from javascript")
var number = 5; // in-line comment

/* this is a
multi-line comment
*/

number = 9;

/////////////////////////////////////////////////////////////////////

/* Data Types:
undefined, null, boolean, string, symbol, number, object
*/

// whole program
var myName = "Beau"

myName = 8

// scope only this file
let ourName = "freeCodeCamp"

// never changed
const pi = 3.14

/////////////////////////////////////////////////////////////////////

var a;
var b = 2;

console.log(a)
console.log(a == null)

a = 7;

b = a;

console.log(a)

/////////////////////////////////////////////////////////////////////

var myStr = "I am a \"double quoted\" string inside \" double quotes\"."
console.log(myStr)

var html1 = "<a href = \"http://www.example.com\" target=\"_blank\">Link</a>"
var html2 = '<a href = "http://www.example.com" target="_blank">Link</a>'
var html3 = `'<a href = "http://www.example.com" target="_blank">Link</a>'`
console.log(html1)
console.log(html2)
console.log(html3)
console.log(html1.length)
console.log(html2.length)
console.log(html3.length)


/////////////////////////////////////////////////////////////////////
myStr = "Jello world";
myStr[0] = "H";
// not [Hello world]
console.log(myStr);


/////////////////////////////////////////////////////////////////////

var ourArray = ["John", 23];

var myArray = ["Quincy", 1];
console.log(ourArray);
console.log(myArray);

/////////////////////////////////////////////////////////////////////

ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);
ourArray.push("hello world");
console.log(ourArray);
var tmp = ourArray.pop();
console.log(ourArray);
console.log(tmp);
tmp = ourArray.shift();
console.log(ourArray);
console.log(tmp);

ourArray.unshift("dog");
console.log(ourArray);

/////////////////////////////////////////////////////////////////////

var myGlobal = 10;
// let oopsGlobal = 5;

function func1() {
    // oopsGlobal = 5;

    let oopsGlobal = 5;
    // var oopsGlobal = 5;
}

function func2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

func1();
func2();

/////////////////////////////////////////////////////////////////////

function nextInLine(arr, item) {
    arr.push(item);
    // return item;
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/////////////////////////////////////////////////////////////////////
function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));
console.log(testStrict(3));
console.log(testStrict('3'));
console.log(testStrict("3"));
console.log(testStrict(`3`));
/////////////////////////////////////////////////////////////////////
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

console.log(ourDog);
delete ourDog.bark;
console.log(ourDog);
/////////////////////////////////////////////////////////////////////

function alpha2num(val) {
    var result = "";
    var lookup = {
        "a": 1024,
        "b": 2048,
        "c": 4096,
        "d": 8192,
        "e": 16382,
        "f": 32768
    };
    result = lookup[val];
    return result;
}

console.log(alpha2num("a"));
console.log(alpha2num("b"));
console.log(alpha2num("xx"));
/////////////////////////////////////////////////////////////////////
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleign"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found.";
    }
}

console.log(checkObj("gift"));
console.log(checkObj("hello"));

/////////////////////////////////////////////////////////////////////
// 为什么放外面不行呢？？
// var _dictMap = new Map();
// _dictMap.set('gift', "pony");
// _dictMap.set('pet', "kitten");
// _dictMap.set('bed', "sleign");
function checkObj(checkProp) {
    // var _dictMap = new Map();
    // _dictMap.set('gift', "pony");
    // _dictMap.set('pet', "kitten");
    // _dictMap.set('bed', "sleign");
    var _dictMap = new Map([
        ['gift', "pony"],
        ['pet', "kitten"],
        ['bed', "sleign"]
    ]);
    if (_dictMap.has(checkProp)) {
        return _dictMap.get(checkProp);
    } else {
        return "Not found.";
    }
}

console.log(checkObj("gift"));
console.log(checkObj("hello"));

/////////////////////////////////////////////////////////////////////
myArray = [];
for (let i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

/////////////////////////////////////////////////////////////////////
myArray = [];
i = 10;
do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(i, myArray);
console.log(i);
console.log(myArray);

/////////////////////////////////////////////////////////////////////

var magic = () => {
    return new Date();
}

console.log(magic());

magic = () => new Date();

console.log(magic());
/////////////////////////////////////////////////////////////////////

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));

/////////////////////////////////////////////////////////////////////

myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/////////////////////////////////////////////////////////////////////

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
/////////////////////////////////////////////////////////////////////
const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));
/////////////////////////////////////////////////////////////////////
{

    const sum = (function () {
        return function sum(x, y, z, w) {
            const args = [x, y, z, w];
            return args.reduce((a, b) => a + b, 1000);
        };
    })();
    console.log(sum(1, 2, 3, 4));
}
/////////////////////////////////////////////////////////////////////
{
    const sum = (function () {
        return function sum(...args) {
            return args.reduce((a, b) => a + b, 1000);
        };
    })();
    console.log(sum(1, 2, 3, 4));
}
