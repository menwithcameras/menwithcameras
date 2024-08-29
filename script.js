document.getElementById('postForm').addEventListener('submit'), async (e) => {}
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    try {
        const response = await fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();
        console.log('Posted:', data);
        // Optionally, handle response accordingly (e.g., show success message, redirect, etc.)
    } catch (error) {
        console.error('Error posting:', error);
        // Optionally, handle error accordingly (e.g., show error message)
    }

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        console.log('Registered:', data);
        // Optionally, handle response accordingly
    } catch (error) {
        console.error('Error registering:', error);
        // Optionally, handle error accordingly
    }
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        console.log('Logged in:', data);
        // Optionally, handle response accordingly
    } catch (error) {
        console.error('Error logging in:', error);
        // Optionally, handle error accordingly
    }
});

document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    try {
        const response = await fetch('/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();
        console.log('Posted:', data);
        // Call a function to add the new post to the page
        addPostToPage(data);
    } catch (error) {
        console.error('Error posting:', error);
        // Optionally, handle error accordingly (e.g., show error message)
    }
});

// Function to add the new post to the page
function addPostToPage(post) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;
    document.body.appendChild(postContainer);
}