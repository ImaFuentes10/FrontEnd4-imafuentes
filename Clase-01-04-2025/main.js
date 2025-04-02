function timer (n){
    if (n === 0) {
        console.log("¡Despegue!");
        return
    }
    setTimeout(() => {
        timer(n-1);
    }, 1000)
    console.log(n);
}

//timer(3);

function sum(n) {
    if (n === 10) return 0;
    return n + sum(n + 1);
}

console.log(sum (5));

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n -1);
}
console.log('factorial: ', factorial(5));


const arrayN = [1,
                [2,3],
                [4,
                    [5],
                    [6,
                        [10, 5]
                    ]
                ]
            ]

function sumArr(arr) {
    let sum = 0;

    for(let item of arr){
        if(Array.isArray(item)){
            sum += sumArr(item);
            console.log('A: ',sum);
            
        } else {
            sum += item;
            console.log('B: ',sum);
            
        }
    }
    return sum;
}

console.log('La suma del arreglo es:', sumArr(arrayN));


//const arr = [1,2,3,4,5];


function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        
        left ++;
        right --;
    }
    return true;
    
}

console.log("Es palídromo: ", isPalindrome(("oso").replaceAll(" ", "")));

function tieneParConSuma (arr, target){
    let left = 0;
    let right = arr.length;

    while (left < right){
        const sum = arr[left] + arr[right];
        if(sum === target) return true;
        if(sum < target) left++;
        else right--;
    }
    return false;
}

const arreglo = [1,2,3,4,5,6];

console.log("Suma par arreglo:",tieneParConSuma(arreglo, 15));



const str = "ab]cd[ef";

const corchetesRec = (str) => {

}

const corchetesPunteros = (str) => {
    let left = 0;
    let right = str.length - 1;
    let suma = 0;

    while (left <= right){
        if (str[left] === "[") {
            left ++;
            suma ++;
        }
        if(str[right] === "]"){
            right --;
            suma --;
        }
        /*while (str[left] === "[" && str[right] !== "]"){
            right --;
            if (left === right) return false;
        }
        while (str[left] !== "[" && str[right] === "]"){
            left ++;
            if (left === right) return false;
        }*/
       left ++;
       right --;
    }
    if(suma === 0)return true;
    if(suma!== 0) return false;
}

console.log(corchetesPunteros(str));
