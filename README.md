TEAM TASK MANAGER

Project Description:
Team Task Manager is a full-stack task management application designed to help teams organize projects and tasks efficiently. The application allows users to create projects, assign tasks, track progress, and manage work collaboratively.

Features:
- User Authentication using JWT
- Role-based Authorization (Admin/Member)
- Project Management
- Task Creation and Tracking
- Dashboard with Task Statistics
- Protected Routes
- Secure Password Encryption using BCrypt
- Responsive User Interface

Tech Stack:

Frontend:
- React.js
- Vite
- React Router
- Axios
- CSS / Tailwind CSS

Backend:
- Spring Boot
- Spring Security
- JWT Authentication
- Hibernate / JPA
- REST API

Database:
- MySQL

Deployment:
Frontend:
- Railway

Backend:
- Railway

Database:
- Railway MySQL

Project Structure:

frontend/
- React frontend application

src/
- Spring Boot backend source code

config/
- Security and CORS configurations

controller/
- REST API controllers

service/
- Business logic layer

repository/
- Database access layer

security/
- JWT Authentication and Security Filters

How to Run Locally:

Frontend:
1. Navigate to frontend folder
2. Run:
   npm install
   npm run dev

Backend:
1. Configure MySQL database
2. Run Spring Boot application
3. Backend runs on:
   http://localhost:8080

API Endpoints:

Authentication:
POST /api/auth/signup
POST /api/auth/login

Projects:
GET /api/projects

Tasks:
GET /api/tasks

Dashboard:
GET /api/dashboard

Deployment URL:

Frontend:
valiant-recreation-production-5d33.up.railway.app

Backend:
team-task-manager-production-332b.up.railway.app

Author:
Rajas Samarth

Built using React + Spring Boot + MySQL + Railway
