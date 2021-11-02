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
//palindrome 넘버인지 아닌지 코드부터 작성한다
//n= 유저가 부른 곱하기 디짓
//string도 똑같으면 if가 된다 
// function largestPalindromeProduct(n) {
// let n = 2;
// palindrome = n.toString();
// num = parseInt(palindrome);
// palindrome.length
// console.log(palindrome.length(1)); 이거 수정하기
//렝스로 비교하는 방법 콘솔로그 더 찍어서 알아내기 !!!!!!

// for (i = 0; i = palindrome.length; i++) { //palindrome.length가 1로 나오는데 이거도 고쳐야된다

//   // 유저가 넣은 디짓에서 제일 큰 숫자 찾아내는 코드 만들기.


//   if (n % 2 == 0) {

// palindrome.length; // 1
// palindrome.length; // -1
// //이거 하면 아무것도 안나온다
//     // 반대쪽 숫자들 비교하는 코드들 만들기

//   }
//   if (n % 1 == 0) {

//   palindrome.length; //1 
//   palindrome.length;// -1



//     가운데 빼고는 다른 숫자들 다 비교하는 코드 찾아내기
//   }
// }

//  console.log(palindrome.length) = 1이 나온다

//  가운데를 찾는 코드 찾기
//  렝스도 쓰고 parseInt() 쓰기 




// palindrome number를 찾는 방버부터 찾기 
// return true;
// }

//유저가 부른 디짓에서 제일 큰 숫자로 만들기
//largestPalindromeProduct(3);

// function largestPalindromeProduct(n) {
//   let number1 = 0;
//   let number2 = 0;
//   let number0 = 0;
//   let numStr = n.length;

//   // let number0 = n.length;

//   //  number1.toString;
//   //  number2.toString;
//   //for(//여기다가 무슨 코드를 쓸지 고민)

//   for () {
//     //여기에 뭐를 넣을지 생각

//     //여기에다가 n을 디짓으로 바꾸기

//     for (number1 = 1; number1.length <= n.length; number1++) {
// //이거도 수정하기

//     }



//     for (number2 = 1; number2.length <= n.length; number2++) {
// //이거도 수정하기


//     }




//     return true;
//   }
// }
//   largestPalindromeProduct(2);




//이제 디짓으로 하는 코드 만들기;
function largestPalindromeProduct(n) {

let originalNumber = 0;
//이 variable에 palindrome 넘버 넣어주기


   (
      parseFloat(
        //스트링에서 넘버로 만드는 코드
        n
          .toString()
          //스트링으로 만들기
          .split('')
          //모든 캐릭터 array로 만들기
          .reverse()
          //리버스 하기
          .join('')
          //다시 하나의 스트링으로 만들기
      ) * Math.sign(n)
      // -/+ 0
    )     
    
  //이 코드가 reverse해서 앞뒤 똑같은 palindrome인지 확인해주기
  
  //다른거를 하나 더 만들어서 odd일떄 가운대 빼주기
  
if(n === originalNumber ){
  return n;
}

}
largestPalindromeProduct(3);
