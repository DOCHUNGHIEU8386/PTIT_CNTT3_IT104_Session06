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
}

// Mảng chứa tất cả học sinh
let allStudents: Student[] = [];

// Lớp Classroom
class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    // In ra danh sách học sinh trong lớp
    showStudents(): void {
        console.log("Danh sách học sinh trong lớp:");
        this.students.forEach(s => {
            console.log(`ID: ${s.getId()}, Name: ${s.getName()}`);
        });
    }

    // Thêm học sinh vào lớp
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

// Tạo 2 lớp học
const classA = new Classroom();
const classB = new Classroom();

// Thêm 3 học sinh cho mỗi lớp từ mảng allStudents
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);

console.log("\nLớp A:");
classA.showStudents();

console.log("\nLớp B:");
classB.showStudents();

console.log("\nMảng allStudents còn lại:", allStudents);