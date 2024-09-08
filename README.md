# E-Commerce Application Setup Guide

This project is built using **React** with **Vite**, **Tailwind CSS**, and **shadecn**. Follow the instructions below to set up the project.

<img src="https://github.com/user-attachments/assets/88b467fc-5164-43e6-97ed-2dd15a992b8e"  width="600" height="300">
<img src="https://github.com/user-attachments/assets/da1b59f1-8008-4d21-bb35-9c294dc140d6"  width="600" height="300">
<img src="https://github.com/user-attachments/assets/99b51de1-44c4-49cf-8893-248d4eef86b6"  width="600" height="300">
<img src="https://github.com/user-attachments/assets/5bf0f28f-3f16-4476-b148-ec85a4a82f62"  width="600" height="300">

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
Install all the required dependencies by running:

```
npm install
```

### 3. Setup Tailwind CSS
This project is configured with Tailwind CSS. If you're starting fresh, follow the steps below:

Install tailwindcss:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure tailwind.config.js by adding the following paths to the content array:

```
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Setup shadecn
Install shadecn:
```
npm install shadecn
```

### 5. Running the Development Server
To start the development server, run:
```
npm run dev
```
This will start the Vite development server, and you can access the application at:
```
http://localhost:3000
```
