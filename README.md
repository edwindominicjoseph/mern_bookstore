

# 📚 MERN Bookstore – BookVerse

An end-to-end full-stack bookstore web application built with the **MERN stack** (MongoDB, Express, React, Node.js) featuring user authentication, cart functionality, code quality enforcement (ESLint + Prettier), GitHub Actions CI, and Husky-based pre-commit checks.

---

## 🚀 Features

- 📘 Book listing with genres
- 🛒 Cart with quantity and price handling
- 🔐 Firebase Authentication (Email + Google Sign-In)
- 🖥️ Vite + Tailwind frontend
- ⚙️ Express + MongoDB backend
- 🔄 RESTful APIs (Books, Orders)
- ✅ Linting + Formatting (ESLint v9 + Prettier)
- 🔧 GitHub Actions CI for code quality checks
- 🧪 Husky + lint-staged pre-commit hook

---

## 🧱 Tech Stack

| Layer        | Tech                                      |
|--------------|-------------------------------------------|
| Frontend     | React, Vite, Tailwind CSS, Redux Toolkit  |
| Backend      | Node.js, Express.js, MongoDB, Mongoose    |
| Auth         | Firebase (Email, Google)                  |
| Dev Tools    | ESLint v9, Prettier, Husky, lint-staged   |
| CI/CD        | GitHub Actions                            |

---

## 📁 Project Structure

mern_bookstore/
├── Backend/ # Express + MongoDB backend
├── Frontend/ # React + Vite + Tailwind frontend
├── .github/workflows/ # GitHub Actions (CI config)
├── .husky/ # Git hooks (pre-commit)
├── .prettierignore # Files to skip Prettier
├── package.json # Root scripts and devDeps
└── README.md # This file



---

## 🧪 Local Setup

### 1. Clone the project


cd mern_bookstore
2. Install dependencies

npm install         # for root (Husky, Prettier, ESLint)
cd Frontend && npm install
cd ../Backend && npm install
3. Configure Firebase

Frontend/src/firebase/firebase.config.js
→ Add your Firebase app config (API key, project ID, etc.)

4. Create a .env file for backend
PORT=5000
DB_URL=your_mongodb_connection_string
🖥️ Run the App Locally

# In one terminal
cd Backend
npm start

# In another terminal
cd Frontend
npm run dev

✅ Code Quality Commands

# Lint everything
npm run lint

# Format all code
npm run format

# Check formatting (CI uses this)
npm run check-format
✅ Pre-commit checks (Husky + lint-staged) auto-run on git commit.

🔄 GitHub Actions CI
Runs on every push or PR:

ESLint (Frontend + Backend)

Prettier check

Fails early if code style is incorrect

Check: Actions tab

🧠 Prettier Ignore Config
Files like the following are excluded from formatting:

arduino
Copy
Edit
node_modules/
dist/
public/
README.md
.github/
.env
You can modify this in .prettierignore.

🔧 Future Enhancements
 Add search & sorting

 Payment integration

 Order history + dashboard

 Unit testing (Vitest)

 CI: Add test + build steps

 Deployment (Render + Vercel)

👨‍💻 Author
Edwin Dominic Joseph
GitHub: @edwindominicjoseph
Live Demo (when deployed): coming soon

📄 License
This project is open-sourced under the MIT License.


---
