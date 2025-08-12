// Hàm generic tìm phần tử trong mảng
function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
}

// Test với mảng số
const numbers = [1, 3, 5, 7, 9];
console.log(findElement(numbers, 5));  
console.log(findElement(numbers, 10)); 

// Test với mảng chuỗi
const names = ["Hiếu", "Phương", "An"];
console.log(findElement(names, "Phương")); 
console.log(findElement(names, "Hải"));  
