// Định nghĩa abstract class Job
abstract class Job {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // Phương thức in loại công việc
    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Phương thức abstract để tính lương
    abstract calculateSalary(): number;
}

// Lớp ParttimeJob kế thừa Job
class ParttimeJob extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

// Lớp FulltimeJob kế thừa Job
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }

    calculateSalary(): number {
        return 10000000;
    }
}

const partTime = new ParttimeJob(60); 
const fullTime = new FulltimeJob();

partTime.printType();
console.log(`Lương: ${partTime.calculateSalary().toLocaleString()} VND`);

fullTime.printType();
console.log(`Lương: ${fullTime.calculateSalary().toLocaleString()} VND`);