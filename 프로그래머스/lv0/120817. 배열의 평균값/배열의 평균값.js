function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 배열의 모든 요소를 더합니다.
  const average = sum / numbers.length; // 평균값을 계산합니다.
  return average;
}

// 예제 배열
const numbers = [1, 2, 3, 4, 5];

// 함수 호출 및 결과 출력
const result = solution(numbers);
console.log(result); // 평균값 출력