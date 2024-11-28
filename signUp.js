document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.signup-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            
            const role = document.getElementById("role").value; // Get the selected role dynamically

            if (role === 'student') {
                // Handle student data
                const name = document.getElementById('student-name').value;
                const gender = document.querySelector('input[name="gender"]:checked').value;
                const course = document.getElementById('course').value;
                const batch = document.getElementById('batch').value;
                const roll_no = document.getElementById('roll-no').value;
                const email = document.getElementById('email').value;
                const mobile_no = document.getElementById('contact-number').value;
                const password = document.getElementById('password').value;

                const studentData = { name, gender, course, batch, roll_no, email, mobile_no, password,role: 'student' };
                // Safely parse localStorage data
                const existingStudents = JSON.parse(localStorage.getItem('students') || '[]');
                existingStudents.push(studentData);
                localStorage.setItem('students', JSON.stringify(existingStudents));
                localStorage.setItem('UserNameIn',name);
            }
            const successMessage = document.getElementById('success-message');
            successMessage.style.display = 'block'; // Show success message

            form.reset(); // Reset the form

            // Redirect to the index page after 3 seconds
            setTimeout(function () {
                window.location.href = 'Loginhtml.html'; // Redirect to index or another page
            }, 3000);
        });
    });
});