function solution(phone_number) {
  return phone_number
    .split("")
    .map((i, index) => index < phone_number.length - 4 ? "*" : i)
    .join("");
}
