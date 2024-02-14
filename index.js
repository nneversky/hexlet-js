export const smallestDivisor = (num, pro = 2) => {
  if (num === 1)
    return 1;

  if (num % 2 === 0)
    return 2;

  if (num % pro === 0){
    return pro;
  } else {
    return smallestDivisor(num, pro +1);
  }
}