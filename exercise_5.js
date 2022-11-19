/*
    Дан произвольный массив. 
    Необходимо вывести количество элементов массива, 
    затем перебрать его и вывести в консоль каждый элемент массива.
*/

let arr1=[1,2,3,4];
function arrayViewer(arr) {
    console.log(`количество элементов массива равно ${arr.length}`);
    let i=0;
    arr.forEach(element => {
        console.log(`element[${i}]=${element}`);
        i++;
    });
}

arrayViewer(arr1);