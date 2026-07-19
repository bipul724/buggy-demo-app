import express from "express";

const app = express();

app.get("/", (req, res) => {
    throw new Error("Database connection failed");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});