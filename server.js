const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Create a schema for blog posts
const blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// User registration endpoint
app.post('/register', (req, res) => {
    // Handle user registration here
});

// Blog posting endpoint
app.post('/post', (req, res) => {
    const { title, content } = req.body;
    const newPost = new Blog({
        title,
        content
    });
    newPost.save()
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ error: err.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Create a new user
        const newUser = new User({
            username,
            email,
            password
        });
        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a schema for users
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Check if the password matches
        if (password !== user.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});