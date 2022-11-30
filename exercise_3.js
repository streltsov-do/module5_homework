/*
    Дана строка. 
    Необходимо вывести в консоль перевёрнутый вариант. 
    Например, "Hello" -> "olleH".
*/


let inputStr=prompt("Введите строку");
console.log(`Входная строка = ${inputStr}`);
console.log(`Длина входной строки = ${inputStr.length}`);
let outputStr="";
for (let i=0; i<inputStr.length; i++){
    // outputStr = outputStr+inputStr.[inputStr.length-i];
    console.log(`slice[${i}] = ${inputStr.slice(inputStr.length-i-1,inputStr.length-i)}`);
    outputStr = outputStr + inputStr.slice(inputStr.length-i-1,inputStr.length-i);
}
console.log(`Выходная строка = ${outputStr}`);

////////////////////////////////////
// с помощью split + reverce + join
let inputStr1=prompt("Введите строку");
console.log(`Входная строка = ${inputStr1}`);
console.log(`Длина входной строки = ${inputStr1.length}`);

console.log(`--------------------------------------------------`);
let outStr1_1=inputStr1.split("");
console.log(`Входная строка + split("")' = ${outStr1_1}`);

let outStr1_2=inputStr1.split("").reverse();
console.log(`Входная строка + .split("").reverse = ${outStr1_2}`);

let outStr1_3=inputStr1.split("").reverse().join("");
console.log(`Входная строка + .split("").reverse.join("") = ${outStr1_3}`);

console.log(`--------------------------------------------------`);
let outStr1_4=inputStr1.split("").reverse().join();
console.log(`Входная строка + .split("").reverse().join() = ${outStr1_4}`);

console.log(`--------------------------------------------------`);
console.log(`Некорректный вариант`);
let outStr2_1=inputStr1.split();
console.log(`Входная строка + .split() = ${outStr2_1}`);

let outStr2_2=inputStr1.split().reverse();
console.log(`Входная строка + .split().reverse() = ${outStr2_2}`);

let outStr2_3=inputStr1.split().reverse().join();
console.log(`Входная строка + .split().reverse().join() = ${outStr2_3}`);
