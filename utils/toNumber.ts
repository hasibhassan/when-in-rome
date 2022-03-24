/**
 * toNumber - iterate through the string and get the char of the current index and the next index and if the current index (left to right) is greater than the next index, subtract it from the total, if not, add it.
 * @param str
 * @returns {number}
 */
export default function toNumber(str: string): number {
  const romanNumerals: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < str.length; i++) {
    result +=
      (romanNumerals[str[i]] < romanNumerals[str[i + 1]] ? -1 : 1) *
      romanNumerals[str[i]]
  }

  return result
}
