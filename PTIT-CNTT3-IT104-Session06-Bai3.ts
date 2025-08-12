// Hàm generic đảo ngược mảng
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Test với mảng số
console.log(reverseArray([1, 2, 3])); 

// Test với mảng ký tự
console.log(reverseArray(['a', 'b', 'c']));
