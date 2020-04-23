export const forceType = <T extends unknown>(mockedObj): T => {
  return mockedObj as T
}
