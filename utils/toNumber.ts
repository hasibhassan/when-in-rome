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

  // if the current value is less than the next, subtract it from the result. otherwise, add it.
  for (let i = 0; i < str.length; i++) {
    result +=
      (romanNumerals[str[i]] < romanNumerals[str[i + 1]] ? -1 : 1) *
      romanNumerals[str[i]]
  }

  return result
}
