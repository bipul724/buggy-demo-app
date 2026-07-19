import express from "express";


app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
