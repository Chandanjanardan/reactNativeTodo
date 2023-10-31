const express = require("express");
const app = express();
const User = require("./models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors({ credentials: true, origin:'http://localhost:19006' }));




app.use(express.json());
const URI = process.env.URI;
const secret=process.env.SECRET

mongoose.connect(URI);

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const userDoc = await User.create({ username, password: hashPassword });
    res.json({ data: { userDoc } });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.findOne({ username });

    if (!userDoc) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, userDoc.password);
    

    if (passwordMatch) {
      const token = jwt.sign({ username },secret , { expiresIn: '1h' });
      
      res.status(200).json({ token,username });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
