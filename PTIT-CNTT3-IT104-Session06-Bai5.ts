// Hàm generic tìm phần tử đầu tiên chia hết cho 2 và thỏa predicate
function findFirstEvenMatch<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find(item =>
        typeof item === "number" && // chỉ xử lý nếu là số
        item % 2 === 0 &&           // chia hết cho 2
        predicate(item)             // thỏa điều kiện predicate
    );
}

//  tìm số chẵn > 10
const numbers = [1, 3, 4, 7, 12, 15, 20];
console.log(findFirstEvenMatch(numbers, num => num > 10)); 

// tìm số chẵn < 5
console.log(findFirstEvenMatch(numbers, num => num < 5)); 

// Mảng không có số chẵn phù hợp
console.log(findFirstEvenMatch(numbers, num => num > 50)); 
