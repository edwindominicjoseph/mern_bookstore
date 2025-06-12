# 🌐 MERN Stack Web Application (Complete – Phase 1)

This is a full-stack web application built using the MERN stack: **MongoDB, Express, React, and Node.js**. It simulates a modern online bookstore with user authentication, cart functionality, and a clean UI. The project is now moving toward DevOps integration and deployment.

---

## ✅ Current Status (Detailed)

| Module               | Status       | Description                                                                  |
|----------------------|--------------|------------------------------------------------------------------------------|
| 🎉 Project Setup      | ✅ Complete  | Vite + Tailwind frontend, Express backend, and MongoDB connection setup     |
| 🎨 Frontend UI        | ✅ Complete  | All components, pages, and Redux integration are done                        |
| 🔧 Backend API        | ✅ Complete  | Fully functional Express API with route/controllers for books and users     |
| 🔐 Auth System        | ✅ Complete  | Firebase-based Email + Google Sign-In auth system integrated                 |
| 📦 State Management   | ✅ Complete  | Redux Toolkit used for cart and auth handling                               |
| 🧪 Frontend Testing   | ✅ In Progress | In [separate repo](https://github.com/edwindominicjoseph/mern_bookstore_testing) using Vitest |
| 🧹 Code Quality & Workflow | ✅ Active     | ESLint + Prettier with Husky + Lint-Staged for pre-commit checks              |
| ⚙️ DevOps Setup       | ⏳ Upcoming  | Docker, GitHub Actions, Terraform, NGINX, Ansible planned                   |

---

## 🛠️ Tech Stack

| Layer       | Tech                                     |
|-------------|------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS                |
| Backend     | Node.js, Express.js                      |
| Database    | MongoDB, Mongoose                        |
| Auth        | Firebase Auth + Context API              |
| State Mgmt  | Redux Toolkit                            |
| Testing     | Vitest, React Testing Library (separate repo) |
| DevOps      | Docker, GitHub Actions, Terraform, NGINX |
| Tools       | Git, Postman, VS Code                    |

---

## 📦 Installation (Local Development)

### Backend

```bash
cd backend
npm install
cp .env.example .env  # Add MongoDB URI and other environment variables
npm run dev
