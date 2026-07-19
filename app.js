import express from "express";

const app = express();

app.get("/", (req, res) => {
    // Simulate a database connection failure by sending a 500 status
    // and a message, rather than crashing the server directly.
    res.status(500).send({
        error: "MongoNetworkError: connection 42 to 127.0.0.1:27017 closed",
        message: "Database connection failed - Please check your database connection."});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});