/* 1. How Much is True  */

function countTrue(elem) {

    const counter = elem.filter(item=> {
     if(item){
         return 1;
     }
    });
    
    console.log(counter.length)
}

// countTrue([true, false, false, true, false]) 
// countTrue([false, false, false, false])
// countTrue([])


/* 2. Instant JAZZ */

function jazzify(elem) {
    const element = elem.map(item=>{
        if(item.indexOf(7) == -1){
            return item +7
        }else{
            return item
        }
    });
  
    
    console.log(element)
}

// jazzify(["G", "F", "C"]);
// jazzify(["Dm", "G", "E", "A"]);
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
// jazzify([]);


/* 3. Sort Numbers in Descending Order     *-*-*-*-*-**/

function sortDescending(elem){
const elementStart = elem.toString();
const arr = elementStart.split('')
const arrSort = arr.sort(function(a, b){
    return b - a;
  })
const finish = arrSort.join("")
console.log(finish)
}

// sortDescending(123);
// sortDescending(1254859723);
// sortDescending(73065);


/* 4. Sort an Array by String Length */
function sortByLength(elem){

const sortArr = elem.sort(function(a, b){
    return a.length - b.length;
  })
console.log(sortArr);
}

// sortByLength(["Google", "Apple", "Microsoft"]);
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
// sortByLength(["Turing", "Einstein", "Jung"]);


/* 5. Find the Smallest and Biggest Numbers */
function minMax (elem){
    const sortArr = elem.sort(function(a, b){
        return a - b});
    // Тут можна заміть 3 рядків і змінних зробити 1
    // const finish = [sortArr[0], sortArr[sortArr.length-1]]
    let min = [sortArr[0]];
    let max = [sortArr[sortArr.length-1]];
    const finish = min.concat(max);
    console.log(finish);
}

// minMax([1, 2, 3, 4, 5]);
// minMax([2334454, 5]);
// minMax([1]);



/* 6. Find the Largest Numbers in a Group of Arrays */
function findLargestNums(elem){
    const sortMap = elem.map(function(item){
        const sortArr =item.sort(function(a,b){return a - b});
        
        let finish = sortArr.pop();
        return finish;
        });
    console.log(sortMap);
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
    let arrOne= [];
    let arrTwo =[]

    // Тут можна було обійтися без циклу
    // Object.values(item) - поверне тобі всі значення масивом
    //  Object.keys(item) - поверне тобі всі ключі масивом
    // const finish = [Object.values(item), Object.keys(item)] - найпростіше вирішення задачі
for(key in item){
    arrOne.push(key);
    arrTwo.push(item[key]);
}
let finish = [arrOne,arrTwo]

console.log(finish);

}

// keysAndValues({ a: 1, b: 2, c: 3 }) 
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// keysAndValues({ key1: true, key2: false, key3: undefined })

/* 9. Let's Sort This Array! */
function ascDesNone(item , method){
        switch(method) {
        case 'Asc':
        console.log(item.sort((a, b)=> a-b))
        break;
        case 'Des':
        console.log(item.sort((a, b)=> b-a))
        break;
        default:
        console.log(item)
        }
}

// ascDesNone([4, 3, 2, 1], "Asc" );
// ascDesNone([7, 8, 11, 66], "Des");
// ascDesNone([1, 2, 3, 4], "None");



/* 10. Sort the Unsortable */
function sortIt(elem){
    const sortArr = elem.sort((a, b)=> a[0]-b[0] || a-b)
console.log(sortArr)
}

// sortIt([4, 1, 3]);
// sortIt([[4], [1], [3]]);
// sortIt([4, [1], 3]);
// sortIt([[4], 1, [3]]);
// sortIt([[3], 4, [2], [5], 1, 6]);


/* 11. No Hidden Fees */

function hasHiddenFee(elem,item){
    const numberTwo = item.substring(1);
    const mass = elem.map(function(item){
        return item.substring(1)
    });
    const x = mass.reduce(function(prev,item){
        return +prev+(+item)
    })
    console.log(x!=numberTwo)

}

// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15");
// hasHiddenFee(["$1", "$2", "$3"], "$6");
// hasHiddenFee(["$1"], "$4");

/* 12. Trace That Matrix */
function trace(elem){

    let sum = 0;
    for(key in elem){
        sum+=elem[key][key];
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
    let tempF = [n * 9 / 5 + 32];
    let tempK = [n + 273.15];
    let summ = tempF.concat(tempK);
    console.log(summ)
}
// tempConversion(0);
// tempConversion(100);
// tempConversion(-10);
// tempConversion(300.4);

/* 17. What's the Missing Letter? */

// Ну більш-менш, але шось всеодно заплутане якесь для мене
// Це мій варіант виконання цього завдання

// function missingLetter(str) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     Знаходимо індекс першої букви з стрінги
//     const indexStart  = alphabet.indexOf(str[0]);
//     Знаходимо індекс останньої букви з стрінги
//     const indexEnd = alphabet.indexOf(str[str.length -1]);
//     Беремо з цілого алфавіту тільки ту частинку, яка нам потрібна
//     const substring = alphabet.substring(indexStart, indexEnd);
//     let a;
//     for(let i = 0; i< substring.length & i< str.length; i++){
//     Тут відповідно, коли ми знаходимо букву, яка пропущена, мо вже закінчуємо цикл, бо в завданні написано, що вона тільки 1, тому дальше крутити цикл немає сенсу
//         if(substring[i] !== str[i]){
//             a = substring[i];
//             return;
//         }
//     }
//     Ну і тут, якщо a рівне null, тобто пропущеної букви нема, то ми виводимо "No matches", але, якщо a не null, то виводимо його
//     console.log(a ?? 'No matches')
// }

function missingLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let start = alphabet.indexOf(str[0]);
    let finish = 'No Missing Letter';
    for(let i =0; i<str.length;i++){
        if(str[i]!=alphabet[start]){
            finish = alphabet[start]
        } else{
            start++
        }
    }
    console.log(finish)
}

// missingLetter("abdefg")
// missingLetter("mnopqs") 
// missingLetter("tuvxyz") 
// missingLetter("ghijklmno")
