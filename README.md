YourHR - Job Search Service
YourHR is a job search service designed to help job seekers find ideal job roles based on their qualifications and preferences. This web application allows users to sign up, fill out a form with personal information, and upload their resumes.

Project Overview
This project consists of a full-stack web application with separate frontend and backend repositories. The frontend is hosted on Vercel, and the backend requires a MongoDB URI for database connectivity.

Features

User Signup: Allows job seekers to create an account by filling out personal information.

Resume Upload: Users can upload their resumes for job applications.

Data Storage: Securely stores user information and resumes in a MongoDB database.

Responsive Design: accessible on various devices.

Technologies Used

Frontend: React (hosted on Vercel)

Backend: Node.js, Express.js

Database: MongoDB

Hosting: Frontend hosted on Vercel


Frontend Repo: https://github.com/tejasjaiswal07/yourhr

Hosted Link: https://vercel.com/tejasjaiswal07s-projects/yourhr-frontend

Backend Repository
The backend is built with Node.js and Express.js, managing the server-side logic and connecting to MongoDB.

Backend Repo: https://github.com/tejasjaiswal07/yourhr-backend


Setup Instructions

Frontend

Clone the frontend repository: https://github.com/tejasjaiswal07/yourhr

git clone https://github.com/tejasjaiswal07/yourhr

cd frontend

npm install

npm start

Runs the app at http://localhost:3000.

Backend


Clone the backend repository:


git clone https://github.com/tejasjaiswal07/yourhr-backend

cd backend

npm install


Set up the environment variables:

Create a .env file in the backend directory with the following:

MONGODB_URI=<Your MongoDB Connection String>

PORT=5000

Start the backend server:

node server.js

Connecting Frontend and Backend

Ensure the backend is running and accessible at the configured URL.


