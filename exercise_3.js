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