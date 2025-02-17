# Employee Management System - Daniel Konjarski (101436648)

This is an Employee Management System built using Node.js, Express, MongoDB, GraphQL, and bcrypt for authentication. The system allows for basic CRUD operations on employee data, as well as user authentication via login and signup. It is designed to manage employee records, including their personal details, designation, salary, and more.

## Testing

Username: john_doe
Password: securepassword123

## Features

- **User Authentication**: Signup and login functionality using JWT tokens.
- **Employee Management**: 
  - Add new employee
  - Update existing employee information
  - Delete employee
  - Search employee by ID, designation, or department
- **GraphQL API**: Query and mutate employee data using GraphQL.

## Technologies Used

- **Node.js**: JavaScript runtime for the server-side application.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing employee and user data.
- **GraphQL**: Query language for APIs and runtime for executing those queries.
- **bcryptjs**: Library for hashing passwords for secure authentication.
- **jsonwebtoken (JWT)**: For generating and verifying tokens for user authentication.
