function solution(arr) {
  // 배열의 모든 요소를 더하여 총합을 계산합니다.
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // 배열의 총합을 배열의 길이로 나누어 평균을 계산합니다.
  let average = sum / arr.length;
  // 평균값을 반환합니다.
  return average;
}