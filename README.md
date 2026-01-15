📚 The Book Haven – Online Bookstore

The Book Haven is a full-stack Online Bookstore Web Application where users can browse books, view details, add books to a shopping cart, and place orders securely.
The project is built using the MERN stack with modern state management and authentication.

Live Link :- https://book-haven-hazel-psi.vercel.app

🚀 Features
🔐 Authentication

User Signup & Login using JWT

Protected routes for checkout and orders

Persistent authentication using local storage

🏠 Home Page

Display featured books

Book cards with image, price, stock, and description

View book details

📖 Book Details Page

Detailed book information

Quantity controls (+ / −) with stock limits

Add books to cart

🛒 Shopping Cart

Add and remove books

Update quantity with stock validation

Persistent cart using Zustand

Real-time total price calculation

💳 Checkout

Shipping details form

Order summary with subtotal, shipping, and total

Secure order placement (JWT protected)

📦 Orders Page

View all past orders

Order details with items and total amount

Orders stored in MongoDB

🛠️ Tech Stack
Frontend

React.js

React Router

Tailwind CSS

Zustand (state management)

Axios

Framer Motion

Lucide Icons

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt

CORS

📂 Project Structure
client/
├── src/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── BooksById.jsx
│ │ ├── Cart.jsx
│ │ ├── Checkout.jsx
│ │ └── Orders.jsx
│ ├── store/
│ │ ├── useAuthStore.js
│ │ └── useCartStore.js
│ └── components/
│ └── Navbar.jsx

server/
├── models/
│ ├── user.model.js
│ └── order.model.js
├── controllers/
│ ├── auth.controller.js
│ └── order.controller.js
├── routes/
│ ├── auth.routes.js
│ └── order.routes.js
├── middleware/
│ └── auth.middleware.js
├── config/
│ └── db.js
└── server.js

⚙️ Environment Variables

Create a .env file in the server folder:

PORT=8008
MONGODB_URI=mongodb://127.0.0.1:27017/bookstore
JWT_SECRET=your_jwt_secret

▶️ How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/Shankars57/Book_haven.git
cd the-book-haven

2️⃣ Backend Setup
cd server
npm install
npm run dev

Server runs on:
http://localhost:8008

3️⃣ Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

🔐 API Endpoints
Auth

POST /api/user/signup

POST /api/user/login

Orders

POST /api/order (Protected)

GET /api/order/my-orders (Protected)

🧠 Key Learnings

Implemented JWT-based authentication

State management using Zustand

Secure checkout flow

MongoDB schema design

Protected backend routes

Real-world e-commerce architecture

📌 Future Enhancements

Admin dashboard

Stock reduction after order

Payment gateway integration (Stripe)

Email order confirmation

Book management panel

👤 Author

Bonam Shankar
B.Tech (CSE) – 2026
Full-Stack Developer | MERN Stack | DSA Enthusiast

⭐ If you like this project

Give it a ⭐ on GitHub!
