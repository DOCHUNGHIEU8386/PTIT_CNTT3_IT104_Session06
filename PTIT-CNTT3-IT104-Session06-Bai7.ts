// Hàm generic làm phẳng mảng 2 chiều
function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((flat, current) => flat.concat(current), []);
}

// Test với mảng số
const numbers = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(numbers)); // Output: [1, 2, 3, 4, 5, 6]

// Test với mảng chuỗi
const fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
console.log(flatten(fruits)); 
