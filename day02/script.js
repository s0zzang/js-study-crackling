// 예제 1 : 주어진 배열에서 최댓값을 찾아 반환하는 함수를 작성하세요.
function findMax(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(i, arr[i], arr[i-1])
        maxNum = Math.max(arr[i], maxNum);
        // console.log('maxNum', maxNum)
    }
    return maxNum;
}

// 테스트
const numbers = [3, 8, 2, 1, 5, 7, 4];
const maxNumber = findMax(numbers);
// console.log("배열의 최댓값:", maxNumber);

/////

// 예제 2 : 주어진 배열의 모든 요소의 평균을 계산하여 반환하는 함수를 작성하세요.
function calculateAverage(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result / arr.length;
}

// 테스트
const scores = [85, 90, 92, 88, 78];
const averageScore = calculateAverage(scores);
// console.log("배열 요소의 평균:", averageScore);

//////////////////////////////////////////////////////////////////////

// 예제 3 : 주어진 배열의 순서를 거꾸로 뒤집는 함수를 작성하세요.
function reverseArray(arr) {
    let reverse = [];
    //   console.log(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
        // console.log(reverse)
    }
    return reverse;
}

// 테스트
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
// console.log("뒤집힌 배열:", reversedArray);

// 예제 4 : 주어진 배열의 순서를 거꾸로 뒤집고 2배 곱하는 함수를 작성하세요.
function reverseArray2(arr) {
    let reverse = [];
    // console.log(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i] * 2);
        //   console.log(reverse)
    }
    return reverse;
}

// 테스트
const originalArray2 = [1, 2, 3, 4, 5];
const reversedArray2 = reverseArray2(originalArray2);
//   console.log("뒤집히고 곱해진 배열:", reversedArray2);

// 예제 5 : 주어진 배열의 순서를 거꾸로 뒤집고 2배 곱하는 함수를 for문 말고 작성해보쇼
function reverseArray3(arr) {
    let reverse = arr.reverse();
    reverse = reverse.map( (value) => value*2 )
    return reverse;
}

// 테스트
const originalArray3 = [1, 2, 3, 4, 5];
const reversedArray3 = reverseArray3(originalArray3);
console.log("뒤집히고 곱해진 배열:", reversedArray3);
