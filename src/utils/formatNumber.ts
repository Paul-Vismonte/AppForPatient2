export function fShortenNumber(number: number): string {
  if (number === null) return '0';
  if (number < 1000) return number.toString();
  if (number >= 1000 && number < 1000000) return `${(number / 1000).toFixed(1)}K`;
  if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M`;
  return number.toString();
}
