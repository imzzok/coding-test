function solution(m) {
    const letterWidth = 2;  // 각 글자의 가로 크기 (2cm)
    const messageLength = m.length;  // 메시지의 글자 수
    const paperWidth = letterWidth * messageLength;  // 편지지의 가로길이

    return paperWidth;
}