document.addEventListener('DOMContentLoaded', () => {
    // Admin credentials
    const adminCredentials = {
        email: 'admin@gmail.com',
        password: 'admin123'
    };

    // Add event listener for login form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting in the default way

        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        // Ensure a user type is selected
        if (!userType) {
            alert('Please select a user type.');
            return;
        }

        // Check if the user is an admin
        if (email === adminCredentials.email && password === adminCredentials.password && userType === 'admin') {
            // Store admin login status in localStorage
            localStorage.setItem('isAdminLoggedIn', 'true');
            localStorage.setItem('loggedInUserType', 'admin');

            // Redirect to admin page
            window.location.href = 'admin.html';
            return;
        }

        // Fetch approved users from localStorage for each user type
        const approvedUsers = {
            student: JSON.parse(localStorage.getItem('students')) || [],
            teacher: JSON.parse(localStorage.getItem('teachers')) || [],
            staff: JSON.parse(localStorage.getItem('staff')) || []
        };

        // Get the user list for the selected user type
        const userList = approvedUsers[userType] || [];

        // Find if the user exists in the approved list (matching email and password)
        const user = userList.find(u => u.email === email && u.password === password);

        if (user) {
            // Store logged-in status and user details in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loggedInUserType', userType);
            localStorage.setItem('email', user.email);
            localStorage.setItem('UserNameIn', user.name);

            // Redirect to the user page
            window.location.href = 'user.html';
        } else {
            alert('Invalid email, password, or the user is not approved.');
        }
    });
});
