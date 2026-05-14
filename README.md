# ATP_24EG110A09 — Suntek MERN + DSA Training Assignments

> Roll No: **24EG110A09** · Program: **Suntek MERN + DSA Training**

This repository contains all weekly assignments completed as part of the Suntek MERN + DSA training program — progressing from vanilla JavaScript fundamentals through full-stack MERN application development.

---

## 📁 Repository Structure

```
ATP - Week Wise Assignments/
├── Week-1/          # JavaScript fundamentals
├── Week-2/          # HOFs, Classes, Async JS, Node/Express basics
├── Week-3/          # MongoDB + Express REST APIs (Backend-2)
├── Week-4/          # Blog App backend (JWT auth + Mongoose)
├── Week-5/          # HTML/CSS + React basics (Vite)
├── Week-6/          # React advanced + Full-stack Employee CRUD
└── Week-7/          # Capstone: Complete Blog App (MERN)
```

---

## 🗓️ Week-by-Week Breakdown

### Week 1 — JavaScript Fundamentals

**Days 1–2 · Feb 18–19, 2026**

Pure JavaScript programs focused on array operations and functions.

| File                                        | Description                                 |
| ------------------------------------------- | ------------------------------------------- |
| `ArraySumFunction.js`                       | Returns the sum of all elements in an array |
| `BigNumberOfTwo.js` / `BigNumberOfThree.js` | Find the largest among 2 or 3 numbers       |
| `FindBigNumberFunction.js`                  | Generalized max-finder using a function     |
| `SearchElementInArray.js`                   | Linear search implementation                |
| `SmallestMarkInArray.js`                    | Find the minimum value in an array          |
| `SumOfMarksInArray.js`                      | Sum marks stored in an array                |
| `EmployeeArrayOperations.js`                | Array operations on an employee dataset     |

---

### Week 2 — HOFs, OOP, Async JS & Express Intro

**Days 3–5 · Feb 25 – Feb 28, 2026**

**Day 3 — Higher-Order Functions & Modular JS**

- Array/string operations using `map`, `filter`, `reduce` (Link-1)
- HOF-based entity management: `EmployeeProcessingByHof`, `MovieManagementByHof`, `ShoppingCartProcessingByHof`, `StudentManagementByHof`, `TransactionProcessingByHof` (Link-2)
- Modular OOP mini-apps: **Shopping Cart** (`product`, `cart`, `payment`) and **Task Management** (`task`, `validator`) (Link-3)

**Day 4 — ES6+ & Classes**

- `BookClassManagement.js` — ES6 class with inheritance
- `ShallowCopy.js` / `DeepCopy.js` — reference vs. value copy patterns
- `ArraySpreadExample.js` / `ObjectSpreadExample.js` — spread operator usage
- `ExamPortalSimulator.js` / `OTPCountdownSimulator.js` — async JS with `setTimeout`/`setInterval`

**Day 5 — BackEnd-1 (Node + Express)**

- First Express server with in-memory CRUD routes
- Stack: `express`, `dotenv`

---

### Week 3 — MongoDB + REST APIs (Backend-2)

**Days 6–8 · Mar 5–7, 2026**

Express + Mongoose backend with JWT authentication. The same Backend-2 project iterated across three days.

**Stack:** `express` · `mongoose` · `bcryptjs` · `jsonwebtoken` · `dotenv`

**Structure:**

```
Backend-2/
├── server.js
├── models/       UserModel.js, ProductModel.js
├── APIs/         UserAPI.js, ProductAPI.js
├── auth/         auth.js
├── middlewares/  verifyToken.js
└── req.http      (REST Client test file)
```

Key concepts: Mongoose schemas, JWT sign/verify, `verifyToken` middleware, error handler with `err.name` checks.

---

### Week 4 — Blog App Backend (JWT + Cookies)

**Days 9–10 · Mar 12–13, 2026**

Blog application backend with role-based access control introduced.

**Stack:** `express` · `mongoose` · `bcryptjs` · `jsonwebtoken` · `cookie-parser` · `dotenv`

**Roles:** USER · AUTHOR · ADMIN

**APIs:** `AdminAPI.js`, `AuthorAPI.js`, `UserAPI.js`, `CommonAPI.js`

---

### Week 5 — HTML/CSS & React Basics

**Days 12–14 · Mar 16–18, 2026**

**Day 12 — HTML & CSS**

- Tables layout (`Tables/`) and User Details form (`UserDetails/`)
- Assignment-2: multi-section styled page

**Day 13 — CSS Projects**

- Assignment-1: responsive layout
- Assignment-2: two mini UI projects (Project-1, Project-2)

**Day 14 — React (Vite)**

- Assignment-1: Product listing component (`Product.jsx`)
- Assignment-2: User management app with `Navbar`, `Footer`, `UserList`, `Users` components

**Stack:** React 19 · Vite · Tailwind CSS v4

---

### Week 6 — React Advanced + Full-Stack Employee App

**Days 15–17 & Mar 30–31, 2026**

**Day 15 — React Hooks & Context**

- Assignment-1: Comprehensive React demo — `Counter`, `FormDemo`, `APIDemo`, `CreateUsers`, `TestRefTypes`
- Assignment-2: `UserCount` component with shared state

**Day 17 — Context API**

- Counter app with 4 independent counter components sharing context via `ContextProvider.jsx`

**Mar 30 Assignment — Full-Stack Employee CRUD**

First complete MERN full-stack project. Frontend deployed to **Vercel**, backend to **Render**, database on **MongoDB Atlas**.

```
Assignment/
├── Backend/
│   ├── server.js
│   ├── APIs/     EmployeeAPI.js
│   └── models/   EmployeeModel.js
└── Frontend/
    ├── src/
    │   ├── components/   CreateEmp, EditEmployee, Employee, ListOfEmps, Home…
    │   ├── contexts/     ContextProvider.jsx
    │   └── store/        CounterStore.js
    └── vite.config.js
```

**Stack:** React · Vite · Tailwind · Axios · Express · Mongoose · MongoDB Atlas

---

### Week 7 — Capstone: Complete Blog App (Full MERN)

**Final capstone project**

A production-grade blog platform with role-based access, image uploads, JWT auth via HTTP-only cookies, and full deployment.

**Live Deployments:**

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

#### Backend

```
Backend/
├── server.js
├── APIs/         AdminAPI.js · AuthorAPI.js · UserAPI.js · CommonAPI.js
├── models/       UserModel.js · ArticleModel.js
├── middlewares/  verifyToken.js
└── config/       cloudinary.js · cloudinaryUpload.js · multer.js
```

**Stack:** `express` · `mongoose` · `bcryptjs` · `jsonwebtoken` · `cookie-parser` · `cloudinary` · `multer` · `cors` · `dotenv`

#### Frontend

```
Frontend/src/
├── components/
│   ├── Auth:      Login.jsx · Register.jsx · ProtectedRoute.jsx
│   ├── Articles:  Articles.jsx · ArticleById.jsx · WriteArticles.jsx · EditArticle.jsx · AuthorArticles.jsx
│   ├── Users:     UserList.jsx · AuthorList.jsx
│   ├── Profiles:  UserProfile.jsx · AuthorProfile.jsx · AdminProfile.jsx
│   └── Layout:    Header.jsx · Footer.jsx · Home.jsx · Root.jsx · Unauthorized.jsx
├── store/         authStore.js  (Zustand)
└── styles/        common.js     (Tailwind class constants)
```

**Stack:** React 19 · Vite · Tailwind CSS v4 · Zustand · Axios · React Router v7 · React Hook Form · React Hot Toast

**Features:**

- 🔐 JWT auth with HTTP-only cookies
- 🖼️ Image uploads via Cloudinary + Multer
- 👥 Role-based routing: USER / AUTHOR / ADMIN
- 📝 Full article CRUD (create, edit, delete, view by author)
- 🛡️ `ProtectedRoute` wrapper with role enforcement

---

## 🛠️ Tech Stack Summary

| Layer        | Technologies                                                                      |
| ------------ | --------------------------------------------------------------------------------- |
| Language     | JavaScript (ES Modules)                                                           |
| Frontend     | React 19, Vite, Tailwind CSS v4, Zustand, React Router v7, Axios, React Hook Form |
| Backend      | Node.js, Express 5                                                                |
| Database     | MongoDB Atlas, Mongoose                                                           |
| Auth         | JWT, bcryptjs, HTTP-only cookies                                                  |
| File Uploads | Multer, Cloudinary                                                                |
| Deployment   | Vercel (frontend), Render (backend)                                               |

---

## ⚙️ Running a Project Locally

Most projects after Week 2 follow this pattern:

**Backend**

```bash
cd "ATP - Week Wise Assignments/Week-7/Capstone Project/Complete Blog App/Backend"
npm install
# Create a .env file with MONGO_URL, JWT_SECRET, PORT, CLOUDINARY_* keys
node --env-file=.env server.js
```

**Frontend**

```bash
cd "ATP - Week Wise Assignments/Week-7/Capstone Project/Complete Blog App/Frontend"
npm install
npm run dev
```

---
