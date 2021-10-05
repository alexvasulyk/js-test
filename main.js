/* 1. How Much is True  */

function countTrue(elem) {
    let counter = 0;
    elem.filter(item => {
        if (item == true) {
            return counter += 1;
        }
    })
    console.log(counter)
}

// countTrue([true, false, false, true, false]) 
// countTrue([false, false, false, false])
// countTrue([])


/* 2. Instant JAZZ */

function jazzify(elem) {
    let element = []
    for (let i in elem) {
        if (elem[i].indexOf(7) !== -1) {
            element.push(elem[i])
        } else {
            element.push(elem[i] + 7)
        }
    }
    console.log(element)
}

// jazzify(["G", "F", "C"]);
// jazzify(["Dm", "G", "E", "A"]);
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
// jazzify([]);


/* 3. Sort Numbers in Descending Order     *-*-*-*-*-**/

function sortDescending(elem){

let elementStart = elem.toString();
let arr = []
for(let i = 0; i < elementStart.length; i++){
arr[i]=elementStart[i];
}
arr.sort(function(a, b){
    return b - a;
  })
let finish = arr.join("")
console.log(finish)
}

// sortDescending(123);
// sortDescending(1254859723);
// sortDescending(73065);


/* 4. Sort an Array by String Length */
function sortByLength(elem){
let sortFinish = elem;
sortFinish.sort(function(a, b){
    return a.length - b.length;
  })
console.log(sortFinish);
}

// sortByLength(["Google", "Apple", "Microsoft"]);
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
// sortByLength(["Turing", "Einstein", "Jung"]);


/* 5. Find the Smallest and Biggest Numbers */
function minMax (elem){
    let maxNumber = elem[0];
    let minNumber = elem[0];
    for(let i = 0; i < elem.length;i++){
       if(elem[i] > maxNumber){
           maxNumber = elem[i];
       }else if (elem[i]<minNumber){
           minNumber = elem[i]
       }
    }
    console.log(minNumber);
    console.log(maxNumber);
}

// minMax([1, 2, 3, 4, 5]);
// minMax([2334454, 5]);
// minMax([1]);



/* 6. Find the Largest Numbers in a Group of Arrays */
function findLargestNums(elem){
    let maxNumber=[-100,-100,-100];
    for(let i = 0; i<elem.length;i++){
        for(let k = 0;k<elem[i].length;k++){
            if(elem[i][k]> maxNumber[i]){
                maxNumber[i]=elem[i][k]; 
            }
        }
    }
    console.log(maxNumber);
}
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])
// findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])

/* 7. Simple OOP Calculator */
class Calculator {
    constructor(a,b){

       this.numberOne = a;
       this.numberTwo = b; 
    }
    add(){
        console.log(this.numberOne + this.numberTwo);
    }
    subtract(){
        console.log(this.numberOne - this.numberTwo);
    }
    multiply(){
        console.log(this.numberOne * this.numberTwo);
    }
    divide(){
        console.log(this.numberOne / this.numberTwo);
    }
    

}
// let calculator=new Calculator(10,5)
// calculator.add() ;
// calculator.subtract();
// calculator.multiply();
// calculator.divide();


/* 8. Return the Objects Keys and Values */
function keysAndValues(item){
    let returnKeys = [];
    let returnItem = [];
for(key in item){
    returnItem.push(key);
    returnKeys.push(item[key]);
}
console.log(returnItem);
console.log(returnKeys);
}

// keysAndValues({ a: 1, b: 2, c: 3 }) 
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// keysAndValues({ key1: true, key2: false, key3: undefined })

/* 9. Let's Sort This Array! */
function ascDesNone(item , method){
    let arrNumber = item;
        switch(method) {
        case 'Asc':
        arrNumber.sort((a, b)=> a-b);
        break;
        case 'Des':
        arrNumber.sort((a, b)=> b-a);
        break;
        case 'None':
        arrNumber = item
        break;
        }
console.log(arrNumber)
}

// ascDesNone([4, 3, 2, 1], "Asc" );
// ascDesNone([7, 8, 11, 66], "Des");
// ascDesNone([1, 2, 3, 4], "None");



/* 10. Sort the Unsortable */
function sortIt(elem){
    let x = elem
x.sort((a, b)=> a[0]-b[0] || a-b)
console.log(x)
}

// sortIt([4, 1, 3]);
// sortIt([[4], [1], [3]]);
// sortIt([4, [1], 3]);
// sortIt([[4], 1, [3]]);
// sortIt([[3], 4, [2], [5], 1, 6]);


/* 11. No Hidden Fees */
function hasHiddenFee(elem,item){
    let x = 0
    let numberTwo = item.substring(1)
    for(key in elem){
        let y = +elem[key].substring(1)
        x+=y
    }
    if(x == numberTwo){
        return console.log(false)
    }else{
        return console.log(true)
    }
}

// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")
// hasHiddenFee(["$1", "$2", "$3"], "$6")
// hasHiddenFee(["$1"], "$4")

/* 12. Trace That Matrix */
function trace(elem){
    let i = 0;
    let sum = 0;
    for(key in elem){
        sum+=elem[i][key];
        i++;
    }
    console.log(sum)

}
// trace([
//     [1, 4],
//     [4, 1]
//   ])
//   trace([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
//   trace([
//     [1, 0, 1, 0],
//     [0, 2, 0, 2],
//     [3, 0, 3, 0],
//     [0, 4, 0, 4]
//   ])
  
  
/* 13. Remove the Special Characters from a String (use RegExp) */
function removeSpecialCharacters(elem){
    console.log(elem.replace(/[.!@#$%^&\*()]/g,''));
}

// removeSpecialCharacters("The quick brown fox!")
// removeSpecialCharacters("%fd76$fd(-)6GvKlO.")
// removeSpecialCharacters("D0n$c sed 0di0 du1")

/* 14. Check if a String is a Mathematical Expression (use RegExp) */
function mathExpr(elem){
    let regex = new RegExp('[0-9]+$');
    console.log(regex.test(elem))
}
// mathExpr("4 + 5")
// mathExpr("4*6")
// mathExpr("4*no") 

/* 15. Pentagonal Number */
function pentagonal(n){
    console.log((5*(n*n)-5*n+2)/2);
  
}
// pentagonal(1)
// pentagonal(2)
// pentagonal(3)
// pentagonal(8)

/* 16. Temperature Conversion */
function tempConversion(n){
    let tempF = n * 9 / 5 + 32;
    let tempK = n + 273.15;
    let summ = [];
    summ.push(tempF)
    summ.push(tempK)
    console.log(summ)
}
// tempConversion(0);
// tempConversion(100);
// tempConversion(-10);
// tempConversion(300.4);

/* 17. What's the Missing Letter? */
function missingLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let focusA = alphabet.slice(start);
for(let i =0; i<str.length;i++){
    if(str[i]!= focusA[i]){
     return console.log(focusA[i]);
    }
}
for(let i =0; i<str.length;i++){
    if(str[i]== focusA[i]){
     return console.log('No Missing Letter');
    }
}
}

// missingLetter("abdefg")
// missingLetter("mnopqs") 
// missingLetter("tuvxyz") 
// missingLetter("ghijklmno")
