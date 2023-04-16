function solution(n) {
    var a = 0;
    
    for (let i=1; i<=n; i++) {
        if ( n % i === 0) {
            a = a + i;
        }
    }
    return a;
}