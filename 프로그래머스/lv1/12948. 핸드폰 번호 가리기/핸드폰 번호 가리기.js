function solution(phone_number) {
  const len = phone_number.length;
  const stars = "*".repeat(len - 4);
  const lastFour = phone_number.slice(len - 4);
  return stars + lastFour;
}