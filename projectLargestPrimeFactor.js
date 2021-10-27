// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

//logic 1: 유저가 부른 숫자까지 도는 루프 
//logic 2: 프라임팩터를 찾을떄까지 도는 루프
//logic 3: 프라임팩터들 중에 제일 큰 숫자 찾기 
//logic 4: 2면 그냥 2가 나오는 코드?

//유저가 넣은 코드가 2일때 자꾸 문제가 일어나는데 그거 알아내기
//for loop 혹시 모르니까 다시 보기
//스코프 문제 보기

function largestPrimeFactor(number) {

    let primeFactor = 2;
    for (let i = 0; i <= number; i++) {


        if (number % primeFactor === 0 ) {

            number /= primeFactor;
            
            
        } else {
            primeFactor++;
        }
    }
    
    return primeFactor;
}
console.log(largestPrimeFactor(2));
//2일떄 뭐를 하는 if statement를 하면 다른 정답이 이상하게 나온다
//2가 나오게 만들면 다른 코드에서 문제가 생긴다
//루프 초반에 무슨 문제가 있는거 같은데 
//내일도 파이썬 투터 다시 돌려서 보기 
//2에서만 자꾸 무슨 문제가 생긴다 다른거는 다 괜찮은데  

function largestPrimeFactor(number) {

    let primeFactor = 2;
    for (let i = 0; i <= number; i++) {

        if (number % primeFactor === 0) {

            number /= primeFactor;
            if (number === 1) {
                return primeFactor;
            }

        } else {
            primeFactor++;
        }
    }
    return primeFactor;
}
console.log(largestPrimeFactor(13195));

function test2(n) {
    let result = null;
    for (let i = 2; ; i++) {
        if (n % i === 0) {
            n = n / i;
            result = i;
            if (n === 1) {
                return result;
            }
        }
    }
}

console.log(test2(2));

function test2(n) {
    let result = null;               //3 4 5 6 7 8 9 
    for (let i = 2; ; i++) { // 3 5 7 9 
        // if(n )
        if (n % i === 0) {
            n = n / i;
            if (n % 2 === 0) {
                for (; ;) {
                    if (n % 2 === 0) {
                        n = n / 2;
                    } else {
                        break;
                    }
                }
            }


            result = i;
            if (n === 1) {
                return result;
            }
        }
    }
}

console.log(test2(8));