// script.js

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        // Redirect to home page
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid login credentials');
    }
});

// Handle navigation
const loadContent = (content) => {
    const contentDiv = document.getElementById('content');
    switch(content) {
        case 'home':
            contentDiv.innerHTML = '<h1>Welcome to the Home Page</h1>';
            break;
        case 'about':
            contentDiv.innerHTML = '<h1>About Us</h1><p>This is the about us section.</p>';
            break;
        case 'contact':
            contentDiv.innerHTML = '<h1>Contact</h1><p>This is the contact section.</p>';
            break;
        case 'admin':
            contentDiv.innerHTML = '<h1>Administrator</h1><p>This is the administrator section.</p>';
            break;
        case 'faculty':
            contentDiv.innerHTML = '<h1>Faculty</h1><p>This is the faculty section.</p>';
            break;
        case 'timetable':
            contentDiv.innerHTML = '<h1>Timetable</h1><p>This is the timetable section.</p>';
            break;
        case 'logout':
            window.location.href = 'index.html';
            break;
        default:
            contentDiv.innerHTML = '<h1>Welcome to the Home Page</h1>';
    }
};

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.target.id;
        loadContent(id);
    });
});
