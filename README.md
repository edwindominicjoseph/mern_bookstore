# 📚 MERN Bookstore – BookVerse

An end-to-end full-stack bookstore web application built with the MERN stack (MongoDB, Express, React, Node.js) featuring user authentication, cart functionality, unit testing, Docker support, code quality enforcement, CI/CD with GitHub Actions, and Husky-based pre-commit checks.

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
| CI/CD     | GitHub Actions                                     |

---

## 📁 Project Structure

mern_bookstore/
├── Backend/ # Express + MongoDB backend
├── Frontend/ # React + Vite + Tailwind frontend
├── .github/workflows/ # GitHub Actions (CI config)
├── .husky/ # Git hooks (pre-commit)
├── docker-compose.yml # Docker setup
├── .prettierignore # Files to skip Prettier
├── package.json # Root scripts and devDeps
└── README.md # This file


---

## 🧪 Local Setup

1. **Clone the project**  
```bash
git clone https://github.com/edwindominicjoseph/mern_bookstore.git  
cd mern_bookstore  


npm install                # for root tools (Husky, Prettier, ESLint)  
cd Frontend && npm install  
cd ../Backend && npm install  


🖥️ Run the App Locally
Backend
cd Backend  
npm start  



Frontend
cd Frontend  
npm run dev  
Or Run with Docker

docker-compose up --build  
✅ Code Quality Commands
Lint everything
npm run lint

Format all code
npm run format

Check formatting (CI uses this)
npm run check-format

✅ Pre-commit checks (Husky + lint-staged) auto-run on git commit.

🔄 GitHub Actions CI
Runs on every push or PR:

ESLint (Frontend + Backend)

Prettier check

(Planned) Build & Unit test steps

Fails early if code style is incorrect

Check: Actions tab on GitHub

🧪 Testing
✅ Frontend Unit Tests using Vitest & React Testing Library

cd Frontend && npm run test

🔧 Future Enhancements
🔍 Search & sorting

💳 Payment integration

📊 Order history + admin dashboard

🧪 Backend unit & integration testing

🚀 Deployment (Render + Vercel)

👨‍💻 Author
Edwin Dominic Joseph
GitHub: @edwindominicjoseph
Live Demo (coming soon)

