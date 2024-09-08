# E-Commerce Application Setup Guide

This project is built using **React** with **Vite**, **Tailwind CSS**, and **shadecn**. Follow the instructions below to set up the project.

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
