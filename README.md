# 🌐 MERN Stack Web Application (Under Progress)

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
| 🧹 Code Quality & Workflow | ✅ Active     |  ESLint and Prettier integration with Husky and lint-staged for automated pre-commit checks.            |
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

## 🧹 Code Quality & Workflow

This project enforces code quality with a modern, production-grade setup:

- **ESLint (Flat Config)** for both Frontend and Backend
- **Prettier** for consistent formatting across the full stack
- **Husky** Git hooks to prevent bad code from being committed
- **lint-staged** to lint and format only staged files
- **VS Code integration** with auto-fix on save supported

### 🧪 How to Test Linting Manually


# Lint all frontend and backend files
npm run lint

# Auto-fix issues
npm run lint:fix

---
# 🪢 Pre-commit Hook
Runs automatically on git commit, thanks to Husky:
npx lint-staged
✅ No poorly formatted code will sneak past this gate.

---
# 📦 Installation & 🔧 Usage


# 📁 Setup Backend
cd Backend
npm install
cp .env.example .env
npm run dev:start


# 💻 Setup Frontend
cd Frontend
npm install
npm run dev



---

