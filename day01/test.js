// 구구단 출력기 만들기: 사용자가 입력한 숫자에 대한 구구단을 출력하는 프로그램 사용자가 숫자를 입력하면 해당 숫자의 구구단이 출력되어야 합니다.
const num = +(prompt('몇 단을 보여드릴깝쇼'));
for(let i = 1; i <= 9; i ++){
  console.log(`${num} * ${i} = ${num*i}`)
}

// 모든 구구단 출력
// for(let i = 2; i<=9; i++){
//   console.log(`${i}단`)
//   for(let j = 1; j<=9; j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }

// 사용자한테 숫자를 prompt 로 입력 받아 그 숫자가 짝수인지 홀수인지 판별하는 프로그램
// const checkNum = (prompt('짝수인지 홀수인지 알아보려면 입력해보쇼'));
// if(checkNum === ''){
//   alert('숫자를 입력해주세요 !')
// } else if(+checkNum % 2){
//   alert('홀수요 !')
// } else {
//   alert('짝수요 !')
// }