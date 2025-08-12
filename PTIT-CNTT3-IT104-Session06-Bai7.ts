// Lớp Student
class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

// Mảng chứa tất cả học sinh chưa vào lớp
let allStudent: Student[] = [];

// Lớp Classroom
class Classroom2 {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    // In ra danh sách học sinh trong lớp
    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Không có học sinh nào trong lớp.");
            return;
        }
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }

    // Thêm học sinh trực tiếp vào lớp
    addStudent(student: Student): void {
        this.students.push(student);
    }

    // Lọc học sinh theo id
    filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }

    // Thêm học sinh từ mảng allStudents vào lớp
    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1); // Xóa khỏi mảng tất cả học sinh
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id}`);
        }
    }

    // Xóa học sinh khỏi lớp và thêm vào allStudents
    removeStudent(id: number): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            allStudents.push(this.students[index]); // Thêm vào allStudents
            this.students.splice(index, 1); // Xóa khỏi lớp
            console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }

    // Sửa thông tin học sinh trong lớp
    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
            console.log(`Đã sửa tên học sinh ID ${id} thành "${newName}".`);
        } else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp.`);
        }
    }
}

// Tạo 6 học sinh và thêm vào allStudents
allStudents.push(
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Châu"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Khoa")
);

// Tạo 1 lớp học 
const classA = new Classroom1();

// Thêm 3 học sinh vào lớp
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

// Hiển thị ban đầu
console.log("\n--- Danh sách ban đầu ---");
classA.showStudents();
console.log("AllStudents:", allStudents.map(s => s.getName()));

// Xóa học sinh ID 2
classA.removeStudent(2);

// Sửa tên học sinh ID 3
classA.editStudent(3, "Châu Nguyễn");

// Hiển thị sau thay đổi
console.log("\n--- Danh sách sau thay đổi ---");
classA1.showStudents();
console.log("AllStudents:", allStudents.map(s => s.getName()));