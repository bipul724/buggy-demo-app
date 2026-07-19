import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Service is running. Database connection simulated.");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});