# 🎓 Scholar Buddy

> Your smart companion for discovering the best scholarships tailored for you!

**Scholar Buddy** is a full-stack web application built with the MERN stack that helps students explore and manage scholarship opportunities with ease. It uses a Python-powered web scraper to fetch real-time scholarship data and stores it in MongoDB. The frontend offers a seamless browsing experience with features like filtering, wishlisting, and secure user authentication.

---

## 📚 Features

- 🧠 Intelligent scholarship discovery
- 🐍 Python scraper for real-time data collection
- 🗃️ MongoDB data storage with PyMongo
- 💻 React-based user interface with clean UI/UX
- 🔐 User authentication using JWT and bcrypt
- ❤️ Wishlist feature to save favorite scholarships
- 📂 REST API built with Node.js and Express

---

## 🧰 Tech Stack

| Layer      | Tech Used                                |
|------------|-------------------------------------------|
| Frontend   | React, Axios, React Router DOM, Tailwind  |
| Backend    | Node.js, Express.js, MongoDB, Mongoose    |
| Scraper    | Python, BeautifulSoup/Scrapy, PyMongo     |
| Auth       | JWT, bcrypt, cookie-parser                |
| Database   | MongoDB (local or Atlas)                  |

---

## 🚀 Getting Started

Clone the project and install dependencies for all parts:

```bash
git clone https://github.com/yourusername/scholar-buddy.git
cd scholar-buddy
```
🔧 Backend Setup
```bash
Copy
Edit
cd backend
npm install
```
##Create a .env file in /backend with the following:

```env
Copy
Edit
DBURL=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=4000
```
##Then, start the backend server:

```bash
npm start
```
##💻 Frontend Setup
```bash
cd front-end
npm install
npm run dev
```

