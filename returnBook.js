document.getElementById('returnForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const serialNumber = document.getElementById('serialNumber').value;
    const returnDate = document.getElementById('returnDate').value;

    if (!bookName || !serialNumber || !returnDate) {
        alert('All fields are required!');
    } else {
        alert('Book returned successfully!');
        // Redirect to fine payment page
        window.location.href = 'payFine.html';
    }
});
