// Hàm generic kết hợp 2 object
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Test với object khác 
const person = { name: "Hiếu", age: 19 };
const job = { position: " ABC ", salary: 10000000 };

const combined = mergeObjects(person, job);

console.log(combined);
