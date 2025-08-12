// Định nghĩa abstract class Shape
abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Phương thức lấy tên hình
    getName(): string {
        return this.name;
    }

    // Phương thức abstract để các lớp con phải override
    abstract getSize(): void;
}

// Lớp Rectangle kế thừa Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    // Ghi đè phương thức getSize
    getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}

const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log("Tên hình:", rect.getName());
rect.getSize();