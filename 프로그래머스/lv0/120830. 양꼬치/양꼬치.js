function solution(n, k) {
  const price = n * 12000 + k * 2000;
  const freeDrinkCount = Math.floor(n / 10);
  const totalPrice = price - freeDrinkCount * 2000;
  return totalPrice;
}