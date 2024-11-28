// Predefined books and authors
const books = {
    "Harry Potter": "J.K. Rowling",
    "The Hobbit": "J.R.R. Tolkien",
    "1984": "George Orwell",
};

// Populate author name based on selected book
document.getElementById('bookName').addEventListener('input', function () {
    const bookName = this.value;
    const authorNameField = document.getElementById('authorName');

    if (books[bookName]) {
        authorNameField.value = books[bookName];
    } else {
        authorNameField.value = ''; // Clear if book not found
    }
});

// Form submission logic
document.getElementById('issueForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const issueDate = document.getElementById('issueDate').value;
    const returnDate = document.getElementById('returnDate').value;

    if (!bookName || !authorName || !issueDate || !returnDate) {
        alert('All fields are required!');
    } else {
        alert(`Book issued successfully!\nBook: ${bookName}\nAuthor: ${authorName}`);
        // Add logic to update records
    }
});

// Set minimum issue date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('issueDate').setAttribute('min', today);
document.getElementById('returnDate').setAttribute('min', today);
