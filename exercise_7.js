let arr_5_6_dif=[
    1,1,5,5,5,
    2,2,4,4,
    0,0,0,
    "2",
    null,
    NaN
];


let arrDesc=[0,0,0];
arr_5_6_dif.forEach(function(item,index,array){
    if ((!isNaN(item)) && (typeof(item) == "number")){
        if (item===0)
        {
            arrDesc[0]++;
        } else if ((item % 2) === 0) {
            arrDesc[1]++;
        } else {
            arrDesc[2]++;
        }
    }
})
console.log(`Количество чётных элементов в массиве равно ${arrDesc[1]}`);
console.log(`Количество нечётных элементов в массиве равно ${arrDesc[2]}`);
(arrDesc[0]!==0)?console.log(`Количество нулевых элементов в массиве равно ${arrDesc[0]}`):"";
