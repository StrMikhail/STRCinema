export function paginate (items: String[], pageNumber: number, pageSize: number) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
