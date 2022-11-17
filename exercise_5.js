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