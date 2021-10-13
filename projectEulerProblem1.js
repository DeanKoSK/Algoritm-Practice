// // Problem 1: Multiples of 3 and 5
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

// multiplesOf3and5(10) should return a number.

// multiplesOf3and5(49) should return 543.

// multiplesOf3and5(1000) should return 233168.

// multiplesOf3and5(8456) should return 16687353.

// multiplesOf3and5(19564) should return 89301183.

function multiplesOf3and5(number) {
  //배수 찾는 코드 

  // i % 3 == 0 3배수
  // i % 5 == 0 5배수
  //퍼센트를 써라
  let zero = 0;
  for (let i = 1; i > 0; i--) {
    let addingNumber = "";
    for (let i = 1; i <= number - 1; i++) {
      //유저가 부른 숫자 까지 돌게하기
      if (i % 3 == 0 || i % 5 == 0) {

        //let addingNumber = zero + i;
        addingNumber = zero += i;
        //console.log(addingNumber);


      }
      //console.log(i);
    }
    console.log(addingNumber);
    return true;
  }
}
// 마지막까지 나왔던 숫자들 다 더하는걸 만들어야되는데
multiplesOf3and5(19564);

  //로직 쓰기 
  //freecodecamp 꼭 읽기

  // 1. for loop로 parameter 전체 숫자를 돌린다
  //    2. if statement를 써서 3이나 5로 나누었을때 나머지가 없는 값을 찾는다
  //    3. 그리고 나서 나머지 없는 값을 전부 더해준다 