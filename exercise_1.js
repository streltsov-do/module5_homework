    // 5.3
    
let inputVariable=prompt("Введите значение");

inputVariable = +inputVariable;

console.log(typeof(inputVariable));
if ((typeof(inputVariable) !== "number") || (isNaN(inputVariable))) {
    console.log("Упс, кажется, вы ошиблись");
} else {
    let outLog = ((inputVariable % 2) == 0)?"Число чётное":"Число нечётное";
    console.log(outLog);
}