 Survey Feedback Application

This is a simple Survey Feedback Application built with React.js (frontend), Tailwind CSS (UI), Express.js (backend), and MongoDB (database).  
It supports JWT-based authentication, so only logged-in users can submit surveys. Users can also view submitted surveys.

 Features

- User Authentication
  - Register a new user  
  - Login using email and password  
  - Logout functionality  

- Survey Management
  - Submit feedback with multiple fields:
    - Name
    - Email
    - Rating (1–5)
    - Category (Website / Service / Product)
    - Message  
  - View all submitted surveys  

- Authentication Enforcement
  - Only logged-in users can **submit new surveys**
  - Anyone can **view existing surveys**
  - Uses **JWT stored in cookies** for authentication

- Frontend
  - Built with React.js and Tailwind CSS
  - Separate components for Login, Register, Survey Form, Survey List, and Logout
  - State-based UI for login/logout

- Backend
  - Express.js server with routes for:
    - `/api/register` → Register user
    - `/api/login` → Login user (sets JWT in HTTP-only cookie)
    - `/api/logout` → Logout (clears cookie)
    - `/api/survey` → CRUD survey operations (only POST requires authentication)
  - MongoDB stores users and survey data
  - CORS configured to allow frontend communication
  - Passwords hashed using bcrypt
  - JWT token expires in 1 day
