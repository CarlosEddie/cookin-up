export function list1ItemsAreInList2(list1: unknown[], list2: unknown[]) {
    return list1.every((list1Item) => list2.includes(list1Item));
}