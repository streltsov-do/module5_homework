let x=1;
let y="not a number";
let x1=NaN;
let y1=true;
let x2=[3,4];

function isNumber(input){
    switch(typeof(input)){
        case "number":
            if (isNaN(input)){
                console.log(`Тип [${input}] - NaN`);
            } else {
                console.log(`Тип [${input}] - число`);
            }
            break;
        case "boolean":
            console.log(`Тип [${input}] - логический`);
            break;
        case "string":
            console.log(`Тип [${input}] - строка`);
            break;
        default:
            console.log(`Тип [${input}] не определён`);
    };
};

isNumber(x);
isNumber(y);
isNumber(x1);
isNumber(y1);
isNumber(x2);