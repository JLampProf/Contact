# Contact

A full-stack contact management application built to practise and demonstrate core frontend and backend development concepts using React, Node.js, Express, and MySQL.

Overview

This project is a small CRUD-based contact management application that allows users to submit contact information and view existing contacts retrieved from a MySQL database.

The application was built independently as a practical exercise in connecting a React frontend to a Node.js/Express backend and a relational database.

I implemented the application's functionality myself while applying concepts I have learned through previous full-stack development work.

The project focuses on the fundamentals of building a complete client-to-database workflow, including form handling, validation, REST API communication, database queries, asynchronous operations, and frontend state management.

Tech Stack:
Frontend:
 - React.js
 - Axios
 - CSS

Backend:
 - Node.js
 - Express
 - MySQL
 - REST API

Testing:
 - Vitest
 - React Testing Library
 - userEvent

Features:
 - Add new contacts through a React form
 - Client-side form validation
 - Store contact information in MySQL
 - Retrieve existing contacts from the database
 - Display database records in the frontend
 - Update the frontend contact list after successfully adding a contact
 - Loading state while retrieving database data
 - Success and error notifications
 - REST API communication between frontend and backend
 - Component and utility testing

Application Flow:

The application follows a straightforward client/server/database flow:

React Frontend
      ↓
Axios API Request
      ↓
Express REST API
      ↓
MySQL Database
      ↓
API Response
      ↓
React State
      ↓
Contact List

When the application first loads, the frontend requests the existing contacts from the backend and stores the returned data in React state.

When a new contact is submitted, the form validates the data before sending it to the API. Once the contact has been successfully stored in the database, the new contact is added to the existing frontend state without requiring the entire contact list to be downloaded again.

What I Learned

This project reinforced my understanding of:

React state management
React useEffect
Parent/child component communication
Controlled form inputs
Form validation
Asynchronous JavaScript
Axios API requests
REST API design
Express routes
MySQL queries
Connecting a frontend to a backend
Handling API errors
Testing React components
Mocking API calls during frontend testing
Testing

The project uses Vitest and React Testing Library to test frontend behaviour.

API requests are mocked where appropriate so components can be tested without requiring the backend or database to be running.

Tests cover functionality such as:

 - Form rendering
 - Form validation
 - User input
 - Successful form submission
 - Error handling
 - API interaction
 - Contact list behaviour

Installation:

1. Clone the repository:
```bash
git clone https://github.com/JLampProf/Contact.git
cd <project-directory>
```
2. Install dependencies
Install the frontend dependencies:
```bash
npm install
```
Install the dependencies in each directory:
```bash
cd client
cd contact
npm install

cd ../../server
npm install
```
3. Configure the database
Create a MySQL database for the application.

The required database/table structure can be found in:

setup.sql

Run the SQL commands against your MySQL server before starting the application.

4. Configure environment variables

Create the required .env file for the backend.

Example:

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database

Add any additional environment variables required by the project configuration.

5. Start the backend:
```bash
npm start
```
6. Start the frontend:
```bash
npm run dev
```
7. Open the application

Open the local development URL provided by Vite in your browser.

Project Structure
/client
 /contact
  /src
    /components
      Form.jsx
      List.jsx
    /pages
      Main.jsx
    /scripts
      contactScript.js
    /utils
      validateForm.js

/server
  /routes
  /scripts
    contactScript.js
  /config
  server.js

setup.sql
Purpose

This project was created as a practical exercise to reinforce full-stack development fundamentals and testing.

While smaller in scope than my Chatter project, it demonstrates the complete process of collecting user input, validating data, communicating with a REST API, storing information in a relational database, retrieving that information, and managing the resulting data within a React application.
