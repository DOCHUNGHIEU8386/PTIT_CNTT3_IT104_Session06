// Lớp Book
class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string // "available" hoặc "borrowed"
    ) {}
}

// Lớp Member
class Member {
    public lendedBooks: LendedBook[] = [];

    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public status: string // "active" hoặc "locked"
    ) {}
}

// Lớp LendedBook
class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

// Lớp Library
class Library {
    public books: Book[] = [];
    public members: Member[] = [];

    // Thêm sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    // Hiển thị tất cả sách
    showBooks(): void {
        console.log("\nDanh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Không có sách nào trong thư viện.");
            return;
        }
        this.books.forEach(b => {
            console.log(
                `ID: ${b.id}, Title: ${b.title}, Author: ${b.author}, Stock: ${b.stock}, Status: ${b.status}`
            );
        });
    }
}

const myLibrary = new Library();

// Tạo sách
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A", 5, "available");
const book2 = new Book(2, "Học ReactJS", "Trần Thị B", 3, "available");
const book3 = new Book(3, "Cơ sở dữ liệu", "Lê Văn C", 2, "available");

// Thêm sách vào thư viện
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Hiển thị sách
myLibrary.showBooks();