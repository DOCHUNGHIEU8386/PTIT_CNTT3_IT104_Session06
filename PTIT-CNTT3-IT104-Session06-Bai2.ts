function greet<T extends boolean>(flag: T): void {
    if (flag) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

let isHello: boolean = true;

greet(isHello);

greet(false);
