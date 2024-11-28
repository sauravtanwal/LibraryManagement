document.getElementById('membershipForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const membershipType = document.getElementById('membershipType').value;
    const membershipId = document.getElementById('membershipId').value;
    const action = document.getElementById('action').value;

    if (!membershipId) {
        alert('Membership ID is required!');
    } else if (action === 'cancel') {
        alert(`Membership ID ${membershipId} has been canceled.`);
    } else {
        alert(`Membership ID ${membershipId} has been extended by ${membershipType}.`);
    }
});
