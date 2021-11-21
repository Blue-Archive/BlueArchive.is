export function symbolFinder(object: Object, id: string) {
  Object.getOwnPropertySymbols(object).find((symbol) => String(symbol) === `Symbol(${id})`);
}
