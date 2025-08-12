// Method (phương thức bình thường)
// Có thân hàm (có code thực thi).
// Có thể được gọi trực tiếp từ đối tượng của lớp (nếu là public và không static).
// Các lớp con kế thừa có thể override hoặc dùng luôn.

// Ví dụ:
class Animal {
    speak(): void {
        console.log("Động vật đang phát ra âm thanh");
    }
}

const dog = new Animal();
dog.speak();

// Abstract Method 
// Không có thân hàm (chỉ khai báo tên và kiểu trả về).
// Chỉ tồn tại trong abstract class.
// Bắt buộc các lớp con kế thừa phải override (viết code cụ thể cho phương thức đó).
// Không thể tạo đối tượng trực tiếp từ lớp abstract.

// Ví dụ:
abstract class Animal2 {
    abstract speak(): void;

    move(): void { 
        console.log("Động vật đang di chuyển");
    }
}

class Dog1 extends Animal1 {
    speak(): void {
        console.log("Gâu gâu!");
    }
}

const dog2 = new Dog();
dog.speak(); 
dog.move();  