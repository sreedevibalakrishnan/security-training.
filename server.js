const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/training", (req, res) => {
    const username = req.body.username;

    // Training data only.
    // Passwords are never received.
    console.log("Training username:", username);

    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Training server running on port ${PORT}`);
});