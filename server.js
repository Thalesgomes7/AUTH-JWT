import express from "express";
import jwt from "jsonwebtoken"
import usuarios from "./usuarios";

const app = express();
const PORT = process.env.PORT;;
const SECRET_KEY = process.env.SECRET_KEY;
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const usuario = usuarios.find();
});