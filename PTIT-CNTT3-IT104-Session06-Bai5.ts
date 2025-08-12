// Định nghĩa interface changeSpeed
interface changeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

// Định nghĩa lớp Vehicle implements changeSpeed
class Vehicle implements changeSpeed {
    private speed: number;

    constructor(initialSpeed: number = 0) {
        this.speed = initialSpeed;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc: +${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0;
        console.log(`Giảm tốc: -${amount} km/h. Tốc độ hiện tại: ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng xe. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}

const myCar = new Vehicle();

myCar.speedUp(50);   
myCar.slowDown(20);  
myCar.speedUp(30);  
myCar.stop();     