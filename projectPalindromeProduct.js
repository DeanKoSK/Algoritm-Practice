// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.


// 1. 조건
//  - 숫자 2개를 곱한게 palindrome이어야한다
//  - 숫자의 digit numbers 는 n 이다

// two two-digit numbers

// 22 * 44 = panlindrome number 1000
// 91 * 99 = panlindrome number 9009

//logic 1: palindrome이 아닌지 맞는지 구별
//logic 2: 이걸 어떻게 곱할지
//logic 3: 유저가 부른 digit에서 제일 큰 palindrome number

// let num = 906609;
// let n = num.toString();

// console.log(n.split(""))

//n= 유저가 부른 곱하기 디짓
//string도 똑같으면 if가 된다 
// function largestPalindromeProduct(n) {
let n = 906609;
//palindrome = n.toString();


// num = parseInt(palindrome);
if (n % 2 == 0) {
  palindrome = n.toString();
  
if (n % 1 == 0) {
  palindrome = n.toString();
}
 //렝스도 쓰고 parseInt() 쓰기 




//palindrome number를 찾는 방버부터 찾기 
//return true;
//}

//유저가 부른 디짓에서 제일 큰 숫자로 만들기
//largestPalindromeProduct(3);

