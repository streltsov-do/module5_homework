/*
    Создайте произвольный массив Map. 
    Получите его ключи и выведите в консоль все значения 
    в виде «Ключ — Х, значение — Y».

    Используйте шаблонные строки.
*/


let newMap = new Map();
newMap.set("first","first element");
newMap.set("alo",2);
newMap.set(1,"number");
newMap.set(3,4);
newMap.set(true,[1,2]);
newMap.set(NaN,false)

console.log(`Вариант 1 - через keys`);
for (let key of newMap.keys()){
    // console.log(`Ключ=[${key}]`);
    console.log(`Ключ=[${key}], Значение=[${newMap.get(key)}]`);
}
console.log(`--------------------------------------------------`);
console.log(`Вариант 2 - через entries`);
for (let elem of newMap){
    // console.log(`Элемент=[${elem}]`);
    console.log(`Ключ=[${elem[0]}], Значение=[${elem[1]}]`);
}