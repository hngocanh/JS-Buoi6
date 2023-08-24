/** Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000 **/

function findSmallestInteger(target) {

    let sum = 0;
    let i = 1;
    while (sum < target) {
        sum += i;
        i++;
    }

    return i - 1;
}

console.log(findSmallestInteger(10000));


/** Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n **/

function calculateSum(x, n) {
    let sum = 0;

    for (let index = 1; index <= n; index++) {

        sum += x ** index;

    }
    return sum;
}

console.log(calculateSum(2, 5));

/** Nhập vào n. Tính giai thừa 1*2*...n **/

function factorial(number) {

    let result = 1;

    for (let index = 1; index <= number; index++) {
        result *= index;

    }

    return result;
}

console.log(factorial(6));


/** Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh. **/

document.querySelector('#btnCreateDiv').onclick = function () {
    for (let index = 1; index <= 10; index++) {
        const div = document.createElement('div');
        div.textContent = index;

        if (index % 2 === 0) {
            div.style.backgroundColor = 'red';
        } else {
            div.style.backgroundColor = 'blue';
        }
        document.body.appendChild(div);

    }


}

/** Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input **/

// document.querySelector('#btnFind').onclick = function () {
//     var input = +document.querySelector('#number').value;

//     const primes = [];

//     for (let i = 2; i <= input; i++) {
//         let isPrime = true;
//         for (let j = 0; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }

//         }

//         if (isPrime) {
//             primes.push(i);
//         }

//     }

//     for (let prime of primes) {
//         document.querySelector('#result').textContent += `${prime} + <br>`
//     }
// }

const btnFind = document.getElementById('btnFind');
const result = document.getElementById('result');

btnFind.onclick = function () {
    const input = +document.getElementById('number').value;

    const primes = [];

    for (let i = 2; i <= input; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    for (let prime of primes) {
        result.textContent += `${prime} `;
    }
};