function solution(n) {
  let answer = 0;

  while (n > 0) {
    answer += n % 10; // 일의 자리 숫자를 더함
    n = Math.floor(n / 10); // 일의 자리 숫자를 제거
  }

  return answer;
}