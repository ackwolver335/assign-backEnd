# ASSIGN-BACKEND 🚀

A Node.js backend application built using **Express.js** and **MongoDB**, following a clean and scalable folder structure. This project is designed for handling APIs, authentication, middleware logic, and database operations efficiently.

---

## 📁 Project Structure

```bash
ASSIGN-BACKEND/
│
├── config/           # Configuration files (DB, environment setup, etc.)
├── middleware/       # Custom Express middlewares
├── models/           # Mongoose models (Schemas)
├── routes/           # API route definitions
│
├── .env              # Environment variables
├── .gitignore        # Git ignored files
├── index.js          # Application entry point
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── vercel.json       # Vercel deployment configuration
└── README.md         # Project documentation
```

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Vercel (Deployment)

## ⚙️ Installation & Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/assign-backend.git
cd assign-backend
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Setup Environment Variables

- Create a .env file in the root directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## ▶️ Running the Project

#### Development Mode

```bash
npm run start
```

#### Production Mode

```bash
npm start
```

##### The Server will start on :

```bash
http://localhost:5000
```

## 🔗 API Structure

- Routes are defined inside the `routes/` folder
- Controllers/business logic handled via route files
- Database schemas are located in `models/`
- Middleware logic is inside `middleware/`

## 🌐 Deployment

This project supports Vercel deployment.

##### To Deploy :

```bash
vercel
```

Ensure `vercel.json` is properly configured.

## 📌 Features

- Modular folder structure
- MongoDB integration using Mongoose
- Environment-based configuration
- Scalable backend architecture
- Ready for authentication & authorization

## ✨ Author

**Abhay Chaudhary** 

GitHub: [@ackwolver335](https://github.com/ackwolver335)

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!