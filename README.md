# AI Investment Research Agent

## Overview

AI Investment Research Agent is a full-stack web application that analyzes a company using Google's Gemini AI and provides an investment recommendation.

The user enters a company name, and the application generates:

- Company Summary
- Pros
- Cons
- Risk Analysis
- Investment Recommendation

This project was built using React, Node.js, Express, and the Gemini API.

---

## Features

- AI-powered company analysis
- Investment recommendation
- Company summary
- Pros and cons generation
- Risk assessment
- Clean React frontend
- Express backend API
- JSON-based communication between frontend and backend

---

## Tech Stack

### Frontend
- React
- TypeScript
- Axios
- Vite

### Backend
- Node.js
- Express.js
- Google Gemini API
- CORS
- dotenv

---

## Project Structure

```
investment_agent/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env (not included)
│
└── README.md
```

---

## How It Works

1. User enters a company name.
2. React sends the request to the Express backend.
3. The backend creates a prompt for Gemini AI.
4. Gemini analyzes the company.
5. The backend returns structured JSON.
6. React displays the results.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Akshita1395/AI-Investment-Research-Agent.git
```

### Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the server:

```bash
node index.js
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Example Output

Input:

```
Tesla
```

Output includes:

- Company Summary
- Pros
- Cons
- Risk Assessment
- Recommendation (Invest / Hold / Pass)

---
## Key Decisions & Trade-offs

- Built an MVP focusing on the core AI workflow.
- Used Gemini API for fast prototyping.
- Did not include database or authentication because they were outside the scope of the MVP.
- Focused on producing structured JSON output that the frontend could easily display.

---

## Future Improvements

- Live stock market data integration
- Financial ratio analysis
- Better UI/UX
- Charts and visualizations
- Company comparison feature
- Deployment on Vercel/Render

---

## Author

**Akshita Negi**

B.Tech CSE (Data Science)

Lovely Professional University
