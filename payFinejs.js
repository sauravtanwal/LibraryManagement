document.getElementById('fineForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const finePaid = document.getElementById('finePaid').checked;
    if (!finePaid) {
        alert('Please confirm payment of the fine.');
    } else {
        alert('Fine paid successfully! Book return completed.');
        // Logic to finalize transaction
    }
});
