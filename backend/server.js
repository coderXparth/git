import express from "express";
const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@gmail.com" && password === "123456") {
    return res.json({ message: "Login successful" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
