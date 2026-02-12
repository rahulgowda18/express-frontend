const express = require("express");
const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// API route
app.get("/api", (req, res) => {
    res.json({
        message: "This is an Express API",
        method: "GET"
    });
});

// POST example
app.post("/data", (req, res) => {
    const data = req.body;
    res.json({
        received: data
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
