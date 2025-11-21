# 🔐 Full-Stack Authentication System

A comprehensive, production-ready authentication system built from scratch with modern web technologies. This project demonstrates a complete end-to-end implementation of user authentication, featuring secure backend APIs, email verification workflows, and a polished frontend interface.

## ✨ Features

### 🔒 Authentication & Security
- **User Registration** - Secure signup with password hashing and validation
- **Email Verification** - Two-step account activation via email verification links
- **Login System** - JWT-based authentication with secure session management
- **Password Recovery** - Complete forgot password and reset password workflows
- **Route Protection** - Middleware-protected routes for authenticated users only
- **Auth State Check** - Real-time authentication status verification

### 📧 Email Integration
- **Automated Emails** - Seamless email delivery for account verification and password reset
- **Custom Templates** - Professional welcome and verification email designs
- **Mailtrap Integration** - Reliable email service with Mailtrap API

### 🎨 User Interface
- **Responsive Design** - Modern, mobile-friendly UI across all pages
- **Signup Page** - Clean and intuitive registration interface
- **Login Page** - Streamlined authentication experience
- **Email Verification Page** - User-friendly verification confirmation
- **Dashboard** - Personalized user dashboard post-authentication
- **Password Recovery Pages** - Smooth forgot/reset password flows

## 🛠️ Tech Stack

- **Backend** - Node.js with Express.js
- **Database** - MongoDB for secure data persistence
- **Authentication** - JWT (JSON Web Tokens)
- **Email Service** - Mailtrap API
- **Frontend** - React/Vite (or your framework)
- **Styling** - Modern CSS/Tailwind

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js installed (v14 or higher)
- MongoDB instance (local or cloud)
- Mailtrap account for email functionality

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/auth-system.git
cd auth-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=http://localhost:5173
```

**Environment Variables Explained:**
- `MONGO_URI` - Your MongoDB connection string
- `PORT` - Server port (default: 5000)
- `JWT_SECRET` - Secret key for JWT token generation
- `NODE_ENV` - Environment mode (development/production)
- `MAILTRAP_TOKEN` - Your Mailtrap API token
- `MAILTRAP_ENDPOINT` - Mailtrap API endpoint
- `CLIENT_URL` - Frontend application URL

### 4. Build the application

```bash
npm run build
```

### 5. Start the application

```bash
npm run start
```

The application should now be running on `http://localhost:5000` 🎉

## 📁 Project Structure

```
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication middleware
│   └── utils/           # Helper functions
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── utils/       # Frontend utilities
└── .env                 # Environment variables
```

## 🔑 API Endpoints

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/verify-email` - Verify email address
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/check-auth` - Check authentication status

## 🚀 Deployment

Detailed deployment instructions are included in the course, covering:
- Environment setup for production
- Database configuration
- Security best practices
- Hosting options and deployment steps

## 📝 License

This project is licensed under the MIT License.

**I'll see you in the next one! 🚀**

---

Made with ❤️ by [Your Name]
