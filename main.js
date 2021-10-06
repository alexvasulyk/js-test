/* 1. How Much is True  */


// Тут не логічно використовувати фільтер в такому контексті як ти зробив
// Є інший варіант зробити це через фільтер не використуючи змінну counter. Уважно почитай, що робить фільтер 
function countTrue(elem) {
    let counter = 0;
    elem.filter(item => {
        // Тут можна просто if(item) - воно зайде в if якщо це true і не зайде, якщо false
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

// Тут впринципі нормально, але можна оптимізнути через метод масиву map, почитай за нього і перероби
// Ще один варіант, що перевірити останній елемент: elem[i].slice(-1) === '7' - так буде більш зрозуміліше, що саме тобі треба
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

// Все це можна замінити одним рядочком. Почитай за метод split
// let arr = []
// for(let i = 0; i < elementStart.length; i++){
// arr[i]=elementStart[i];
// }

function sortDescending(elem){

let elementStart = elem.toString();
let arr = []
    for(let i = 0; i < elementStart.length; i++){
    arr[i]=elementStart[i];
}

elementStart.sort(function(a, b){
    return b - a;
  })
let finish = elementStart.join("")
console.log(finish)
}

// sortDescending(123);
// sortDescending(1254859723);
// sortDescending(73065);


/* 4. Sort an Array by String Length */

// Тут добре, але немає сенсу в переприсвоюванні масиву у нову змінну
function sortByLength(elem){
// let sortFinish = elem;
elem.sort(function(a, b){
    return a.length - b.length;
  })
console.log(elem);
}

// sortByLength(["Google", "Apple", "Microsoft"]);
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
// sortByLength(["Turing", "Einstein", "Jung"]);


/* 5. Find the Smallest and Biggest Numbers */

// Тут також може бути, але можна було зробити простіше через сортування, подумай як і перероби
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


// Тут не добре 
// let maxNumber=[-100,-100,-100]; - це зле. Якщо в тебе якісь з масивчиків будуть порожні, то виходить, що в тебе максимальні числа будуть -100, що є не логічно
// В загальному думки правильні, але пошук елемену можна набагато спростити (Ти зможеш це зрозуміти, коли переробиш завдання вище)
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

// Тут завдання зроблено не до кінця, результатом функції повинен бути масив, в якому два масив, один з ключами, другий із значеннями
// Почитай про методи об'єктів, тут це все можна зробити в 1 лінію (максимум 2), без циклів 
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

// Тут впринципі норм, але я не розумію нашо ти переприсвоюєш масив
// І ще така порада, завжди залишай в switch щось, що буде повертатися по дефолту (default:), бо можна помилитися в 1 букві і в тебе все ляже
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
// Тут добре, але знов переприсвоєння. І ще, якщо ти переприсвоюєш, то роби цю змінну константою, вона ж в тебе не міняється
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

// Тут можна зробити простіше
// 1. Сума елементів масиву можна спростити через reduce
// 2. Якщо ти зробиш console.log(x==numberTwo) - воно тобі поверне true або false, тоді ти скорочуєш код від 4 рядків (з іфки) до 1
// 3. В завданні написано, що функція має повертати true або false, а вона в тебе повертає console.log
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

// hasHiddenFee(["$25", "$4", "$1", "$8"], "$15")
// hasHiddenFee(["$1", "$2", "$3"], "$6")
// hasHiddenFee(["$1"], "$4")

/* 12. Trace That Matrix */

// Тут можна обійтися без змінної i, подумай як і перероби
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

// Тут добре
function removeSpecialCharacters(elem){
    console.log(elem.replace(/[.!@#$%^&\*()]/g,''));
}

// removeSpecialCharacters("The quick brown fox!")
// removeSpecialCharacters("%fd76$fd(-)6GvKlO.")
// removeSpecialCharacters("D0n$c sed 0di0 du1")

/* 14. Check if a String is a Mathematical Expression (use RegExp) */

// Тут добре
function mathExpr(elem){
    let regex = new RegExp('[0-9]+$');
    console.log(regex.test(elem))
}
// mathExpr("4 + 5")
// mathExpr("4*6")
// mathExpr("4*no") 

/* 15. Pentagonal Number */

// Тут добре
function pentagonal(n){
    console.log((5*(n*n)-5*n+2)/2);
  
}
// pentagonal(1)
// pentagonal(2)
// pentagonal(3)
// pentagonal(8)

/* 16. Temperature Conversion */

// Добре, але можна спростити, забравши push
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

// Це завдання виконано не добре
// 1. Два цикли потрібно замінити одним
// 2. let focusA = alphabet.slice(start); - це нормально, але можна зробити трохи краще. 
// Ти можеш брати прям ту саму стрінгу з алфавіту, яка в тебе, тоді ти зекономиш час на перебір більшої частини алфавіту, яка тобі не потрібна
// 3. З циклу нижче немає ніякого сенсу, ти після першої ж ітерації його закінчуєш
// for(let i =0; i<str.length;i++){
//     if(str[i]== focusA[i]){
//      return console.log('No Missing Letter');
//     }
// }
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
