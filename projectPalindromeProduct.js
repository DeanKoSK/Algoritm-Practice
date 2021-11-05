// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.


// 1. 조건
//  - 숫자 2개를 곱한게 palindrome이어야한다
//  - 숫자의 digit numbers 는 n 이다

// two two-digit numbers

// 22 * 44 = panlindrome number 1000
// 91 * 99 = panlindrome number 9009

//logic 1: Palindrome number가 홀수인지 짝수인지 구별
//logic 2: 반대쪽들이 다 동일한지 구별
//logic 3: 

// a= n[0]
// b= n1[-1] 
// a == b;

let ab = 234

function largestPalindromeProduct(n) {
    over = false
    if (ab % 2 === 0) {

        for (i = 0; i <= ab.toString().split(" ");i++) {
           
           //

            let startLength = ab[i]; 
            let endLength = ab[-1,-i];

            if(startLength == endLength){

              over =true;

            }
            

            if (startLength !== endLength) {
                console.log(fail)
                over = false;
                console.log(fail)
            }
        }
    }
    else {

    }

    return over;
}

largestPalindromeProduct(3);

//console.log(ab.toString().split(""));