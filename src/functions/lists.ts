export function firstListIntoSecondList(firstList:  unknown[], secondList: unknown[]) {
  return firstList.every((itemFirstList) => secondList.includes(itemFirstList));
}
