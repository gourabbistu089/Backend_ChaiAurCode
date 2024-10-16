# Prettier

Prettier is a code formatting tool that helps keep your codebase consistent, organized, and easier to read by enforcing a uniform style. It's widely used in both frontend and backend development and can be particularly useful for backend projects.

# Express

Express is a lightweight and flexible web framework for Node.js. It helps you build web servers and APIs quickly by simplifying tasks like routing, handling HTTP requests, and managing middleware.

# Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It helps you interact with MongoDB databases by providing a structured, schema-based solution to define and manage data.

# CORS?

CORS (Cross-Origin Resource Sharing) is like a security guard for your server. It controls who can access your server from other websites.

## Why Do You Need CORS?

When you build a server, only certain websites should be able to send and receive data from it. CORS lets you decide which websites are allowed.

### How to Use CORS in Express

1. Install CORS: 

        npm install cors

```javascript const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows all websites to access your server

app.get('/', (req, res) => {
  res.send('CORS is enabled!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
```javascript
app.use(cors({
  origin: 'http://example.com' // Replace with the website you want to allow
}));
```
