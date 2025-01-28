# React To-Do List Application

This is a simple to-do list application built using React, Redux and Tailwind CSS. It allows users to manage their tasks by creating, reading, updating, and deleting them.

## Features

*   User authentication (Sign up and Login)
*   Secure task management (each user can only access their own tasks)
*   Create, read, update, and delete tasks
*   Responsive and user-friendly interface
*   Form validation on client and server sides.
*   Error messages when something goes wrong

## Technologies Used

*   **Frontend:**
    *   React
    *   Redux Toolkit
    *   Tailwind CSS
    *   Axios (for API requests)
    *   React Router DOM (for navigation)
*   **Backend:** (See the `/server` directory)
    *   Node.js with Express.js
    *   MongoDB with Mongoose
    *   JSON Web Tokens (JWT) for authentication

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/manyamkarthik/Digital_Factory_Frontend.git
    cd frontend  # Or whatever your frontend folder is called
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
     * Create a file called `.env` inside `client` folder.
     * Add `REACT_APP_BASE_URL=http://localhost:5000/api` or `REACT_APP_BASE_URL=https://your-backend-app-url.com/api`

4.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the app in your default browser, typically at `http://localhost:3000`.

## Deployment

This app is deployed using Netlify and is available at:

[https://todoapp-manyam.netlify.app/](https://todoapp-manyam.netlify.app/)

## Contributing

Feel free to contribute to this project by opening a pull request with your proposed changes.

## License

None
