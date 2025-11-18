# ShoppyGlobe Backend – Node.js, Express & MongoDB

A complete backend system for an e-commerce shopping cart application built using **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.
This project fulfills all requirements of the assignment, including Products API, Cart API, MongoDB integration, JWT-based authentication, and error handling.

## 📌 Features

* Product Listing & Product Details API
* Fully Functional Cart System
* JWT Authentication (Register/Login)
* Protected Cart Routes
* MongoDB Integration using Mongoose
* Centralized Error Handling
* Input Validation & Stock Checks
* Clean Folder Structure

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **CORS**

## 📁 Project Structure
├── controllers/
│   ├── user.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
├── models/
│   ├── User.model.js
│   ├── Product.model.js
│   └── Cart.model.js
├── middleware/
│   ├── verify.js
│   └── errorHandler.js
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
├── index.js
└── readme.md

## ⚙️ Installation & Setup

- 1. Clone the repository
```bash
git clone https://github.com/R-Srijanki/Project_Backend.git
cd Project_Backend
```
- 2. Install dependencies
```bash
npm install
```
- 3. Start the server
```bash
npm start
```

Server runs at:

👉 http://localhost:8000

## 📦 API Endpoints

## 🛍️ Products API
* GET /products

- Retrieve all products.

- ✔ Response
```json
{
  "products": [ ... ]
}
```

* GET /products/:id

- Fetch a single product by its ID.

- ✔ Response
```json
{
  "product": { ... }
}
```

# 🧑‍💼 User Authentication
* POST /register

- Register a new user.

- 📤 Request Body
```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```
* POST /login

- Authenticate user and return a JWT Token.

- ✔ Response
```json
{
  "user": {
    "name": "John",
    "email": "john@gmail.com"
  },
  "accessToken": "<jwt-token>"
}
```

* Use this token for protected routes:

-Authorization: JWT <token>

#🛒 Cart API (Protected)

-These routes require authentication using JWT.

* POST /cart

-Add a product to the cart.

-📤 Request Body
```json
{
  "productId": "<product-id>",
  "quantity": 1
}
```
* PUT /cart/:productId

- Update quantity of a cart item.

- 📤 Request Body
```json
{
  "quantity": 3
}
```
* DELETE /cart/:productId

- Remove a product from the cart.

* GET /cart

- Fetch the user's cart with populated product details.

## ✔ Validation & Error Handling

* Missing fields
* Incorrect product ID
* Insufficient stock
* Invalid or expired JWT token
* Central error handler returns 
consistent error responses

# 🗄️ MongoDB Collections

* Your database contains three collections:

- Products
```css
title
description
price
discountPercentage
stock
category
brand
thumbnail
images[]
```
- Cart
```yaml
user: ObjectId
items: [
  {
    product: ObjectId,
    quantity: Number
  }
]
```
- User
```json
{
    "name":,
    "email":,
    "password":
}
```
# ✅ Successful API Responses (ThunderClient):

/api/products
/api/product/:id
/api/login
/api/register
/api/cart POST
/api/cart GET
/api/cart/:productId PUT
/api/cart/:productId DELETE

# 📝 Notes
- Cart operations are fully protected.
- Stock validation prevents adding more items than available.
- All ObjectId comparisons are properly handled using .toString().

# Project Github Link
Github Link: [Project](https://github.com/R-Srijanki/Project_Backend.git)

## Author
**Rathod Srijanki**  
GitHub: [R-Srijanki](https://github.com/R-Srijanki)