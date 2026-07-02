require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Test Route
app.get("/", (req, res) => {
    res.send("AI Investment Research Agent Backend Running 🚀");
});

// Analyze Route
app.post("/analyze", async (req, res) => {

    try {

        const { company } = req.body;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        const prompt = `
You are an investment analyst.

Analyze the company: ${company}

Return ONLY valid JSON in this format.

{
"summary":"",
"pros":["","",""],
"cons":["","",""],
"risk":"",
"recommendation":""
}
`;

        const result = await model.generateContent(prompt);

const response = result.response.text();

// Remove ```json and ``` from Gemini response
const cleanResponse = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

// Convert string into JSON object
const data = JSON.parse(cleanResponse);

// Ensure exactly 3 pros and 3 cons
data.pros = data.pros.slice(0, 3);
data.cons = data.cons.slice(0, 3);

res.json(data);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Something went wrong."
        });

    }

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
