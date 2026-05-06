require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString:
        process.env.DATABASE_URL,
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
        if (result.rows.length === 0) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        const user = result.rows[0];

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Wrong Email or Password",
            });
        }

        res.json({
            message: "Login Success",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error",
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
