# Blood Bank Management System (MERN + TypeScript)
A full-stack Blood Bank Management System built using the MERN Stack with TypeScript, designed to streamline blood donation, request management, and inventory tracking through a modern and scalable architecture.

This system connects donors, recipients, and administrators in a centralized platform, improving efficiency and reducing delays in critical situations.

## 🚀 Project Overview
The application provides:
* A public user interface for donors and recipients
* A powerful admin dashboard for managing operations
* A secure backend API with JWT authentication

It is designed with real-world usability, focusing on clean UI/UX and structured data flow.

## ✨ Features
### 👤 User Panel
* 🏠 Home Page
* ℹ️ About Page
* ❤️ Why Donate Blood Awareness Page
* 🧑‍🤝‍🧑 Become Donor (Registration Form with full details)
* 🩸 Need Blood (Request blood units with availability, pricing & billing)
* 💳 Online Payment Interface
* 📩 Contact Us (User queries submission)

### 🛠️ Admin Panel
* 🔐 Admin Login (JWT Authentication)
* 📊 Dashboard (Donors, Requests, Quick Stats)
* 🧑‍🤝‍🧑 Donor Management (Filter by blood group)
* 🩸 Blood Request Management
1. Priority handling for critical requests
1. Update status (Pending / Completed / Delivered)
1. Detailed patient/request view
* 📦 Inventory Management
1. Update stock
1. Critical stock alerts
* 📩 Contact Query Management
1. Reply / Close / Filter queries
* 🔔 Notification system for urgent requests
* 🔑 Change Password
* 🚪 Logout
### 🔐 Security Features
* JWT Authentication (Admin only)
* Protected Routes
* Password Hashing using bcrypt
* Secure API communication

## 📸 Screenshots
### User Pages
1. Home Page
<img width="1919" height="935" alt="user-home" src="https://github.com/user-attachments/assets/ad779191-94ac-4be1-99e6-e3778219fa4b" />

2. About us Page
<img width="1919" height="971" alt="user-about" src="https://github.com/user-attachments/assets/c8a2e066-a62c-4c1a-9d89-9bdc4aa7ee43" />

3. Why Donate Blood Page
<img width="1918" height="969" alt="user-whydonate" src="https://github.com/user-attachments/assets/6e95731f-3f82-4d2c-894a-6373a6420c36" />

4. Become a Donor Page
<img width="1919" height="967" alt="user-becomedonor" src="https://github.com/user-attachments/assets/74ba509c-8495-43cc-ba8c-cf750e17b889" />

5. Need Blood Page
<img width="1919" height="974" alt="user-needblood" src="https://github.com/user-attachments/assets/3da4cf41-dee1-455a-9ded-e83ee1875df9" />

6. Contact Us Page
<img width="1919" height="966" alt="user-contactus" src="https://github.com/user-attachments/assets/d05083d5-5a77-42dd-af38-32e360ac9f54" />

### Admin Pages
1. Admin Login Page
<img width="1919" height="970" alt="admin-login" src="https://github.com/user-attachments/assets/1ed897b5-d600-4ce7-9dd3-648bc3ec4fea" />

2. Admin Dashboard Page
<img width="1919" height="960" alt="admin-dashboard" src="https://github.com/user-attachments/assets/6b541688-f6b5-434a-935b-11c0af6a73cc" />

3. Admin Donor Management
<img width="1919" height="976" alt="admin-donor" src="https://github.com/user-attachments/assets/b953cce0-c731-473e-8550-a402f9f1d2dd" />

4. Admin Blood Request Management
<img width="1919" height="970" alt="admin-bloodreq" src="https://github.com/user-attachments/assets/49eca074-98e6-4bfd-9d3c-ddf578369103" />

5. Admin Inventory Management
<img width="1919" height="971" alt="admin-inventory" src="https://github.com/user-attachments/assets/8bf6d5ef-2a0d-474d-a22c-eb196f042b67" />

6. Admin Contact Queries Management
<img width="1919" height="968" alt="admin-contactQ" src="https://github.com/user-attachments/assets/00db4b32-4031-4720-81a3-d0ae9abdd21b" />

7. Admin Change Password Page
<img width="1918" height="971" alt="admin-changepass" src="https://github.com/user-attachments/assets/e590ae07-5806-4735-b0ee-0d55a0c149dd" />

## 🛠️ Tech Stack
### Frontend
* React (Vite)
* TypeScript
* Tailwind CSS
* Axios
### Backend
* Node.js
* Express.js
* TypeScript
### Database
* MongoDB (Atlas)
* Mongoose ODM
### Authentication
* JWT (JSON Web Token)
* bcryptjs
## ⚙️ System Requirements
Install:
```
Node.js (LTS)
npm (comes with Node)
```
## 📦 Installation & Setup
1️⃣ Clone Repository 
```
git clone https://github.com/Sheren-04/Blood-Donation_Management-System.git
```
2️⃣ Backend Setup
```
cd backend
npm init -y
```
Install Production Dependencies
```
npm install express cors dotenv mongoose jsonwebtoken bcryptjs
```
Install Development Dependencies
```
npm install -D typescript ts-node-dev @types/node @types/express @types/cors @types/bcryptjs @types/jsonwebtoken
```
Setup TypeScript
```
npx tsc --init
npx tsc --showConfig
```
⚛️ Frontend Setup
Verify React
```
npm list react
```
If not installed:
```
npm install react react-dom
```
Install Types
```
npm install -D @types/react @types/react-dom
```
## ▶️ Run Locally
Backend
```
cd backend
npm run dev
```
Frontend
```
cd frontend
npm run dev
```
## 📂 Project Structure (Backend)
```
backend/
├── src/
│   ├── config/db.ts
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/authMiddleware.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
```
## 🔗 API Endpoints
Public Routes
```
POST /api/donors
GET /api/donors
POST /api/requests
POST /api/contact
```
Admin Routes (Protected)
```
POST /api/admin/login
GET /api/donors
GET /api/requests
```
## 🔄 System Architecture
```
Frontend (React)
        ↓
REST API (Express + TypeScript)
        ↓
MongoDB (Mongoose)
```
## 🔁 Data Flow
Public Flow
```
Frontend Form → API → Controller → MongoDB → Response → UI
```
Admin Flow
```
Login → JWT Token → Protected API → Middleware → Controller → DB → Response
```
## 🔐 Authentication Flow
* Admin login with email & password
* Password verified using bcrypt
* JWT token generated
* Token stored in frontend
* Protected routes require token
## 🧠 Backend Architecture
* RESTful API design
* MVC pattern (Models, Controllers, Routes)
* Middleware-based authentication
* Modular and scalable structure
## 🧾 Database Models
* Admin
* Donor
* BloodRequest
* ContactMessage
## ❓ FAQ
_Q: Who can access admin panel?_
Only authenticated admins using JWT.

_Q: Is this production ready?_
Yes, architecture follows real-world MERN practices.

_Q: Can it scale?_
Yes, modular backend allows easy scaling.
## 📎 Appendix
* Built as a real-world full-stack project
* Follows industry backend architecture
* Can be extended with mobile apps or cloud deployment
## 👨‍💻 Author
Sarang (Sheren)
* Graphic Designer
* Full Stack Developer
* Cloud Architect (AWS)
* GitHub - https://github.com/Sheren-04
## 🆘 Support
If you found this project useful:
* ⭐ Star the repository
* 🐛 Raise issues
* 🤝 Contribute
