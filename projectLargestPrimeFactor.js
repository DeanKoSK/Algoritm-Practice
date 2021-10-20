// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

//logic 1: 프라임 팩터를 나오는 코드를 만들기
//logic 2: 프라임 팩터들 중에 제일 큰 숫자 나오게 만들기
//logic 3: 값이 안찾아질떄 primeFactor increment
//logic 4: 그중에 제일 높은 프라임 팩터를 찾아내기.


function largestPrimeFactor(number) {
    let zero = 0;
    let primeFactor = 2;
    for (let i = 0; i <= number; i++) {
        //유저가 부른 숫자만큼 도는 루프.
        if (number % primeFactor == 0) {
 
        number /= primeFactor;
            // 여기에다 뭐 넣을지도 알아내야되고 
            // 여기에서 나오는 숫자중에 제일 큰 숫자를 찾아내는 코드도 만들어야되는데.
        } else {
            primeFactor++;
            //안될때마다 나누기 하는 숫자를 늘려주는 코드. 
        }

    }

    return primeFactor;
}

console.log(largestPrimeFactor(13195));
// 13195부터 자꾸 틀리기 시작한다 by 1