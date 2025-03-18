# CES-WEB

Welcome to the official open-source repository initiated by the **Training Committee, NIT Rourkela**, aimed at helping students learn and collaborate on real-world projects.  
This repository is designed to introduce best practices, modern tooling, and fundamental concepts of frontend development with React, along with Firebase integration.  

---

## Project Structure

```
├── .gitignore
├── README.md
├── eslint.config.js            # ESLint config for maintaining code quality
├── index.html                  # Entry point for the app
├── package-lock.json           
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.jsx                 # Main React component
│   ├── firebase.js             # Firebase configuration and initialization
│   ├── index.css
│   ├── main.jsx                # Entry point for React DOM rendering
│   ├── pages                   # All route-based components
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── Upload.jsx
│   │   └── UserProfile.jsx
│   └── styles
│       └── theme.js            # Centralized theme and styles
└── vite.config.js              # Vite configuration
```

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Training-Committee-NIT-Rourkela/CES-WEB
cd CES-WEB
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser  
Visit [http://localhost:5173](http://localhost:5173)  

---

## Technologies Used
- **React**  
- **Vite**  
- **Firebase (Authentication)**  
- **ESLint**  
- **CSS Modules & Theming**  

---

## Contribution Guidelines
We encourage contributions!  
- Fork the repo  
- Create a new branch (`git checkout -b feature-name`)  
- Make your changes  
- Run `npm run lint` to check for lint errors  
- Commit and push your changes  
- Open a Pull Request  

> If you're a beginner, check out the **Issues** section for `good first issue` tags!