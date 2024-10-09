# ToDo Backend

Welcome to the **ToDo Backend** project! This application serves as the backend for a ToDo list, enabling users to manage their tasks through a RESTful API.

## Features

- **Add Tasks**: Create new tasks with a simple POST request.
- **Get Tasks**: Retrieve a list of all tasks stored in the database.
- **Update Tasks**: Mark tasks as done by sending a PUT request.
- **Delete Tasks**: Remove tasks from the list using a DELETE request.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Framework for handling routing and server logic.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM for MongoDB, making it easy to interact with the database.
- **CORS**: Middleware to allow cross-origin requests.
- **dotenv**: Package for managing environment variables.

## Code Overview

### `todo.js`

This file defines the **TodoSchema** and the **TodoModel** for our application.

```javascript
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
```
## Getting Started

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/dpansumisra/ToDoList-Backend.git
    ```
2. **Navigate to the project folder:**
```   
cd todobackend
```
3. **Install the dependencies:**
```
npm install
```
4. **Start the server::**
```
npm start
```

### Key Points:

- **Code Blocks**: Use triple backticks (```) to create code blocks, specifying the language (e.g., `bash`, `makefile`) for syntax highlighting.
- **Instructions**: Clearly list each step to guide users through the setup process.
- **Clear Formatting**: Ensure that each step is easy to read and follow.


