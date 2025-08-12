// Hàm generic cập nhật một phần của đối tượng
function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

// Test 1
const person1 = { name: 'Alice', age: 30, job: 'Developer' };
console.log(partialUpdate(person1, { age: 31 }));

// Test 2
const person2 = { name: 'Alice', age: 30, job: 'Developer' };
console.log(partialUpdate(person2, { name: 'Bob', job: 'Designer' }));
