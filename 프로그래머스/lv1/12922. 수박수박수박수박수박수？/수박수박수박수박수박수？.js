function solution(n) {
  let answer = ''; // 결과를 저장할 빈 문자열을 만듭니다.
  for (let i = 1; i <= n; i++) { // 1부터 n까지 반복합니다.
    if (i % 2 !== 0) { // 현재 숫자가 홀수라면 '수'를 answer에 추가합니다.
      answer += '수';
    } else { // 현재 숫자가 짝수라면 '박'을 answer에 추가합니다.
      answer += '박';
    }
  }
  return answer; // 결과 문자열을 반환합니다.
}