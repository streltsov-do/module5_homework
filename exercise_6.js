/*
    Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
    Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
    Проверить, все ли элементы в массиве одинаковые.
*/

let arr_5_6_bad=[1,1,1,1,5];    
let arr_5_6_good=[1,1,1,1,1];

function arrElementsCompare(arr){
    let arrElementsEqual=true;
    let i=0;
    // let arrI = 0;
    // let arrI1=0;
    while(arrElementsEqual && (i<arr.length-1)){
        if (arr[i]!==arr[i+1])
        {
            arrElementsEqual=false;
        }
        // arrI = arr[i];
        // arrI1=arr[i+1];
        debugger;
        i++;
    }
    console.log(arrElementsEqual);
}
arrElementsCompare(arr_5_6_bad);
arrElementsCompare(arr_5_6_good);