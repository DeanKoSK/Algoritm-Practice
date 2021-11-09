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


function largestPalindromeProduct() {
    let ab = 2442;
    
    
  
    forlooplength = parseInt(ab.toString.length / 2)
    console.log(forlooplength)
    // = 0 should be 2
   // if (ab.toString().length % 2 === 0) {

        let number = ab.toString().split("").length

        for (let i = 0; i <= forlooplength; i++) {

            let front = ab.toString()[i];
            let back = ab.toString().length -1 -i;
            

            parseInt(front);
            parseInt(back);

            

            if (front === back) {

                console.log("working");

            }
            else {
                console.log("fail");
                return false;

            }
        }
  //  }
    // else {
    //     let number = ab.toString().split("").length

    //     for (let i = 0; i <= number; i++) {

    //         let front = ab.toString()[i];
    //         let back = ab.toString()[-1, -i];

    //         parseInt(front);
    //         parseInt(back);

    //         console.log(front)
    //         console.log(back)

    //         if (front === back) {

    //             console.log("working");

    //         }
    //         else {

    //             console.log("fail")
    //             over = false;

    //         }
    //     }
    // }

    return true;
}

largestPalindromeProduct();

//console.log(ab.toString().split(""));