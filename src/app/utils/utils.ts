export function extractFirstWord(fact:string): string {
  return fact.split(' ', 1).join(' ')
}
