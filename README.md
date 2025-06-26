# 📚 MERN Bookstore – BookVerse

An end-to-end full-stack bookstore web application built with the MERN stack (MongoDB, Express, React, Node.js) featuring user authentication, cart functionality, unit testing, Docker support, code quality enforcement, CI/CD with GitHub Actions, **Jenkins pipeline support**, and Husky-based pre-commit checks.

---

## 🚀 Features

- 📘 Book listing with genres  
- 🛒 Cart with quantity and price handling  
- 🔐 Firebase Authentication (Email + Google Sign-In)  
- 🖥️ Vite + Tailwind frontend  
- ⚙️ Express + MongoDB backend  
- 🔄 RESTful APIs (Books, Orders)  
- ✅ Linting + Formatting (ESLint v9 + Prettier)  
- 🧪 Unit Testing with Vitest & React Testing Library  
- 🐳 Dockerized Frontend and Backend  
- 🔧 GitHub Actions CI for code quality checks  
- 🛠️ Jenkins-based local CI/CD pipeline  
- 🧪 Husky + lint-staged pre-commit hook  

---

## 🧱 Tech Stack

| Layer     | Tech                                               |
|-----------|----------------------------------------------------|
| Frontend  | React, Vite, Tailwind CSS, Redux Toolkit           |
| Backend   | Node.js, Express.js, MongoDB, Mongoose             |
| Auth      | Firebase (Email, Google)                           |
| Dev Tools | ESLint v9, Prettier, Husky, lint-staged, Docker    |
| Testing   | Vitest, React Testing Library                      |
| CI/CD     | GitHub Actions, Jenkins                            |

---

## 📁 Project Structure

mern_bookstore/
├── Backend/ # Express + MongoDB backend
├── Frontend/ # React + Vite + Tailwind frontend
├── Jenkinsfile # Jenkins CI pipeline for local builds
├── docker-compose.yml # Docker setup
├── .github/workflows/ # GitHub Actions CI config
├── .husky/ # Git hooks (pre-commit)
├── .prettierignore # Prettier exclusion list
├── package.json # Root tools and devDeps
└── README.md # This file


---

## 🧪 Local Setup

### 1. Clone the Project  

git clone https://github.com/edwindominicjoseph/mern_bookstore.git  
cd mern_bookstore
2. Install Dependencies
npm install                 # Root tools (Husky, Prettier, ESLint)
cd Frontend && npm install  
cd ../Backend && npm install  
🖥️ Run the App Locally
✅ Using npm

# Backend
cd Backend
npm start

# Frontend
cd ../Frontend
npm run dev
🐳 Or Run with Docker

docker-compose up --build
🔁 Jenkins CI/CD (Local)
This project supports local continuous integration using Jenkins. The pipeline includes the following stages:

Checkout code from GitHub

Install frontend & backend dependencies

Run frontend unit tests

Build frontend production bundle

Spin up backend and frontend containers via Docker Compose

✅ Setup Instructions
Install Jenkins and Docker locally

Add GitHub personal access token in Jenkins → Manage Credentials

Add .env variables in Jenkins credential store or .env file

Configure NodeJS (e.g., "NodeJS_24") in Jenkins global tools

Run the pipeline using the Jenkinsfile in the root directory

🔒 Secrets Management
Use Secret Text credentials in Jenkins for secure environment variables (e.g., DB_URL, PORT)

Inject them using the environment {} block in the Jenkinsfile or bind them to the shell

✅ Code Quality Commands
bash
Copy
Edit
# Lint
npm run lint

# Format
npm run format

# Format check (used in CI)
npm run check-format
✅ Pre-commit checks (Husky + lint-staged) auto-run on git commit

🔄 GitHub Actions CI
Automatically runs on push/PR:

ESLint (frontend + backend)

Prettier check

(Planned) Build & test pipeline

Check logs in GitHub → Actions tab

🧪 Testing


# Frontend Unit Tests
cd Frontend && npm run test
🔧 Future Enhancements
🔍 Search & sorting

💳 Payment integration

📊 Order history + admin dashboard

🧪 Backend unit & integration testing

🚀 Deployment (Render + Vercel or Docker with Jenkins)

👨‍💻 Author
Edwin Dominic Joseph
GitHub: @edwindominicjoseph
📺 Live Demo: Coming Soon
